import {createContext,useContext,useEffect,useState} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved ? JSON.parse(saved) : false
    })

    const toggleDarkMode = () =>{
        setDarkMode(prev => !prev)
    }
/*
    useEffect(() => {
        localStorage.setItem('theme',JSON.stringify(darkMode))
        document.body.classList.toggle('dark', darkMode)
        

    },[darkMode]);
    */
   useEffect(() => {
  document.body.classList.remove('dark', 'light')

  if (darkMode) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.add('light')
  }

}, [darkMode])

    return (
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

