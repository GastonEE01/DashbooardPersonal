import React from 'react'
import '../AddWidgetModal/AddWidgetModal.css'
export const AddWidgetModal = ({addWidget,onClose}) => {
    return (

    <div>
      <h2>Agregar Widget </h2>
       <div className='modal'>
       <button onClick={onClose}>Cerrar</button>
      <button onClick = {() => {addWidget('clock'); onClose();}}>Reloj</button>
      <button onClick = {() => { addWidget('notes'); onClose();}}>Notas</button>
      <button onClick = {() => {addWidget('quote'); onClose();}}>Frase</button>
      <button onClick={() => { addWidget('weather'); onClose(); }}>Clima</button>
    </div>
    </div>
  )
}
