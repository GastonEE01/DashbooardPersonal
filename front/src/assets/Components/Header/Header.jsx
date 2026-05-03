import React, { useState } from 'react'
import './Header.css'
import '../AddWidgetModal/AddWidgetModal'
import { AddWidgetModal } from '../AddWidgetModal/AddWidgetModal'
import { useTheme } from '../Context/ThemeContext'

export const Header = ({addWidget}) => {

  const [showModal, setShowModal] = useState(false)
  const {darkMode, toggleDarkMode } = useTheme()

  return (
    <header className={darkMode ? 'dark' : 'light'}>
    <div >
      <h1>Mi Dashboard</h1>
      <button onClick={toggleDarkMode}>{darkMode ? 'Modo Claro' : 'Modo Oscuro'}</button>
      <button onClick={() => setShowModal(true)}>+ Agregar</button>
      {showModal && (
        <AddWidgetModal 
          addWidget = {addWidget}
          onClose= {() => setShowModal(false)}
        />
      )}

    </div>
    </header>
  )
}

//      <button onClick={() => {addWidget}}>+ Agregar</button>
