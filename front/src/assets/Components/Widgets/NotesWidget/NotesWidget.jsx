import { useRef, useState } from 'react'
import './NotesWidget.css'
import { Button } from '../../UIX/Button'

export const NotesWidget = ({ title,onDelete }) => {
  const [note, setNote] = useState('')
  const textAreaRef = useRef(null)

  return (
    <div className = "papper" >
      <button className="close-btn" onClick={onDelete}> X</button>

      <h3>{title}</h3>
      <textarea ref = {textAreaRef}
        value={note} 
        onChange={(e) => setNote(e.target.value)}
        placeholder="Escribe una nota..."
      />
      <Button onClick={() => textAreaRef.current.focus()}>Guardar</Button>
    </div>
  )
}
// guardar en el localStorage HACER PROXIMAMENTE 
//3. El texto debe persistir mientras navegas (lo guardas en localStorage en nivel 5)
