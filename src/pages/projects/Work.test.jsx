import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WorkPage } from './index.jsx'
import { projects } from '../../content_option.js'

describe('WorkPage', () => {
  it('renders one h1, one h2 per project, and a GitHub link per project', () => {
    render(<WorkPage />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(projects.length)

    projects.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
    })

    const githubLinks = screen.getAllByRole('link', { name: /view on github/i })
    expect(githubLinks).toHaveLength(projects.length)
    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  it('renders carousel controls for projects with multiple images and lets Next advance the image', async () => {
    const user = userEvent.setup()
    render(<WorkPage />)

    const multiImageProject = projects.find((project) => project.images.length > 1)
    const prevButtons = screen.getAllByRole('button', { name: 'Previous image' })
    const nextButtons = screen.getAllByRole('button', { name: 'Next image' })
    expect(prevButtons.length).toBeGreaterThan(0)
    expect(nextButtons.length).toBeGreaterThan(0)

    const firstImageAlt = `${multiImageProject.title} screenshot 1 of ${multiImageProject.images.length}`
    expect(screen.getByAltText(firstImageAlt)).toBeInTheDocument()

    await user.click(nextButtons[0])

    const secondImageAlt = `${multiImageProject.title} screenshot 2 of ${multiImageProject.images.length}`
    expect(screen.getByAltText(secondImageAlt)).toBeInTheDocument()
  })

  it('renders the closing line', () => {
    render(<WorkPage />)
    expect(screen.getByText(/more to come/i)).toBeInTheDocument()
  })
})
