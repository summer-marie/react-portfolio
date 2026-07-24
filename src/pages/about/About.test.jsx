import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './index.jsx'

describe('About', () => {
  it('renders one h1, all section headings, and the profile image', () => {
    render(<About />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { name: 'Strengths' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /portrait of summer halsey/i })).toBeInTheDocument()
  })

  it('does not render any skill percentage values', () => {
    render(<About />)

    expect(screen.queryByText(/%/)).not.toBeInTheDocument()
  })
})
