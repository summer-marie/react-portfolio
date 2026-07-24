import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { Home } from './index.jsx'

describe('Home', () => {
  it('renders the hero heading, all section headings, and the primary CTA', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'How I Work' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Engineering Approach' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Core Skills' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view work/i })).toHaveAttribute('href', '/work')
    expect(screen.getByRole('link', { name: /contact me/i })).toHaveAttribute('href', '/contact')
  })
})
