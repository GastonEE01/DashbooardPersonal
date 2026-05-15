import React from 'react'
import '../AddWidgetModal/AddWidgetModal.css'
import { Button } from '../UIX/Button'
export const AddWidgetModal = ({addWidget,onClose}) => {
   return (
      <div className="modal-overlay">
        <div className="modal">

          <div className="go-corner">
            <div onClick={onClose} className="go-arrow">X</div>
          </div>

          <h2>Agregar Widget</h2>

          <Button  className="modal-button" onClick={() => { addWidget('clock'); onClose(); }}>
            Reloj
          </Button>

          <Button className="modal-button" onClick={() => { addWidget('notes'); onClose(); }}>
            Notas
          </Button>

          <Button className="modal-button" onClick={() => { addWidget('quote'); onClose(); }}>
            Frase
          </Button>

          <Button className="modal-button" onClick={() => { addWidget('weather'); onClose(); }}>
            Clima
          </Button>

        </div>
      </div>
    )
  }

