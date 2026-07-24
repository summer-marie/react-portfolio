import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Resume } from './index.jsx'

describe('Resume', () => {
  it('renders one h1 and the Education/Technical Skills headings', () => {
    render(<Resume />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Technical Skills' })).toBeInTheDocument()
  })

  it('renders the education entry as a timeline item with a machine-readable date', () => {
    render(<Resume />)

    expect(
      screen.getByRole('heading', { name: 'Full Stack Developer Certification' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Persevere Code Camp')).toBeInTheDocument()

    const time = screen.getByText('6/2025')
    expect(time.tagName).toBe('TIME')
    expect(time).toHaveAttribute('dateTime', '2025-06')
  })

  it('does not render any skill percentage values', () => {
    render(<Resume />)

    expect(screen.queryByText(/%/)).not.toBeInTheDocument()
  })

  it('renders working download links to the resume PDF', () => {
    render(<Resume />)

    const downloadLinks = screen.getAllByRole('link', {
      name: 'Download Summer Halsey resume PDF',
    })

    expect(downloadLinks).toHaveLength(2)
    downloadLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/assets/resume/summer-halsey-resume.pdf')
      expect(link).toHaveAttribute('download', 'summer-halsey-resume.pdf')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
