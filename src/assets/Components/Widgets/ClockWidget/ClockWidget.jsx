import { useState,useEffect } from 'react'
import './ClockWidget.css'

export const ClockWidget = ({ title, onDelete }) => {
  const [time, setTime] = useState(new Date())
  //const {darkMode } = useTheme()


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className = "">
      <h3>{title}</h3>
      <button onClick={onDelete}> X</button>
      <p>{time.toLocaleTimeString()}</p>  
      
    </div>
  )
}

