import { useRef, useState } from 'react'
import './NotesWidget.css'


export const NotesWidget = ({ title,onDelete }) => {
  const [note, setNote] = useState('')
  const textAreaRef = useRef(null)

  return (
    <div className = "notes" >
      <h3>{title}</h3>
      <textarea ref = {textAreaRef}
        value={note} 
        onChange={(e) => setNote(e.target.value)}
        placeholder="Escribe una nota..."
      />
      <button onClick={() => textAreaRef.current.focus()}>Guardar</button>
      <button onClick={onDelete}> X</button>

    </div>
  )
}
// guardar en el localStorage HACER PROXIMAMENTE 
//3. El texto debe persistir mientras navegas (lo guardas en localStorage en nivel 5)
