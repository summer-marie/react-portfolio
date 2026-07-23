import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import './style.css'

const Themetoggle = () => {
  const [theme, settheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const themetoggle = () => {
    settheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={themetoggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  )
}

export default Themetoggle
