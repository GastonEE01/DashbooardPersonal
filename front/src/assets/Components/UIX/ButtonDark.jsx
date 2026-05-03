import React, { useState } from 'react'
import './ButtonDark.css'  // Importar el CSS

export const ButtonDark = () => {

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    const isDark = savedTheme === 'dark'
    
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    return isDark
  })

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="container">
      <label className="toggleLabel">
        <input 
          type="checkbox" 
          className="hiddenInput"
          checked={darkMode}
          onChange={toggleTheme}
          role="switch"
          aria-label="Theme Toggle Switch"
        />
        <div className={`slider ${darkMode ? 'sliderDark' : ''}`}>
          <div className="iconsContainer">
            <svg className="sunIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg className="moonIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
        </div>
        <span className={`textMode ${darkMode ? 'textDark' : 'textLight'}`}>
          AI Mode
        </span>
      </label>
    </div>
  )
}