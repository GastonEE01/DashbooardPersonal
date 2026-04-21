//import React, { useMemo } from 'react'
import { useMemo } from 'react'

export const QuoteWidget = ({onDelete}) => {
    const quotes = [
        "El exito es la suma de pequeños esfuerzos.",
        "Nunca dejes de aprender.",
        "La practica hace al maestro.",
        "Confia en el proceso.",
    ]

    const frase = useMemo(() => {
    const numberRandom = Math.floor(Math.random() * quotes.length)
        return quotes[numberRandom]
    },[])

  return (
    <div>
      <h3>Frase del dia</h3>
         <p>{frase}</p>
        <button onClick={onDelete}> X</button>

    </div>
  )
}

