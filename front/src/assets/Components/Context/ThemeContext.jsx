import {createContext,useEffect,useState} from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [darkMode,setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
           return saved === 'dark'

    })

    const toggleDarkMode = () =>{
        setDarkMode(prev => !prev)
    }

   useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')

  if (darkMode) {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  } else {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }

}, [darkMode])

    return (
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
  )
}


