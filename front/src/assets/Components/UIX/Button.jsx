import React from 'react'
import '../UIX/Button.css'
import { useTheme } from '../Context/useTheme'

export const Button = ({children,onClick, className=""}) => {
    const { darkMode } = useTheme()

  return (
      
 <button
      onClick={onClick}
      className={`button44 ${darkMode ? 'dark' : 'light'} ${className}`}
    >
{children}</button>

  )
}

