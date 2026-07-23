import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Socialicons } from './index.jsx'

describe('Socialicons', () => {
  it('renders a link for each configured social profile', () => {
    render(<Socialicons />)

    const links = screen.getAllByRole('link')
    const hrefs = links.map((link) => link.getAttribute('href'))

    expect(hrefs).toContain('https://github.com/summer-marie')
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
