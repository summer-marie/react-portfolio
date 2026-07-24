import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import emailjs from '@emailjs/browser'
import { ContactUs } from './index.jsx'

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn() },
}))

describe('ContactUs', () => {
  beforeEach(() => {
    emailjs.send.mockReset()
  })

  it('renders one h1 and a labeled field for name, email, subject, and message', () => {
    render(<ContactUs />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('updates each field as the user types, without stale values', async () => {
    const user = userEvent.setup()
    render(<ContactUs />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'A test message')

    expect(screen.getByLabelText('Name')).toHaveValue('Ada Lovelace')
    expect(screen.getByLabelText('Email')).toHaveValue('ada@example.com')
    expect(screen.getByLabelText('Subject')).toHaveValue('Hello')
    expect(screen.getByLabelText('Message')).toHaveValue('A test message')
  })

  it('submits via emailjs.send with the four template fields and shows a dismissible success alert', async () => {
    emailjs.send.mockResolvedValueOnce({ text: 'OK' })
    const user = userEvent.setup()
    render(<ContactUs />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'A test message')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(emailjs.send).toHaveBeenCalledTimes(1)
    const [, , templateParams] = emailjs.send.mock.calls[0]
    expect(templateParams).toEqual({
      user_name: 'Ada Lovelace',
      user_email: 'ada@example.com',
      subject: 'Hello',
      message: 'A test message',
    })

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(/success/i)

    await user.click(screen.getByRole('button', { name: 'Dismiss notification' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows an error alert when emailjs.send rejects', async () => {
    emailjs.send.mockRejectedValueOnce({ text: 'network error' })
    const user = userEvent.setup()
    render(<ContactUs />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'A test message')
    await user.click(screen.getByRole('button', { name: /send/i }))

    const alert = await waitFor(() => screen.getByRole('alert'))
    expect(alert).toHaveTextContent(/failed to send/i)
  })
})
