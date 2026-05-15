import React, { useState } from 'react'
import './Header.css'
import '../AddWidgetModal/AddWidgetModal'
import { AddWidgetModal } from '../AddWidgetModal/AddWidgetModal'
import { ProfileModal } from '../Profile/ProfileModal'
import { useTheme } from '../Context/useTheme'

import { ButtonDark } from '../UIX/ButtonDark'
import { Button } from '../UIX/Button'

export const Header = ({addWidget}) => {

  const [showModalButtons, setShowModalButtons] = useState(false)
  const [showModalPerfil, setShowModalPerfil] = useState(false)
  const {darkMode, toggleDarkMode } = useTheme()

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="title">Mi Dashboard</h1>

      <div className='buttons'>
      <ButtonDark onClick={toggleDarkMode}>{darkMode ? 'light' : 'dark'} </ButtonDark>
      <Button onClick={() => setShowModalButtons(true)}>+ Agregar</Button>
      {showModalButtons && (
        <AddWidgetModal addWidget = {addWidget} onClose= {() => setShowModalButtons(false)} />
      )}
      <Button onClick={() => setShowModalPerfil(true)}>Perfil</Button>
      {showModalPerfil && (
        <ProfileModal onClose= {() => setShowModalPerfil(false)} />
      )}

    </div>
    </header>
  )
}
//    <header className={darkMode ? 'dark' : 'light'}>

//      <button onClick={() => {addWidget}}>+ Agregar</button>
