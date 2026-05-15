//import React, { useMemo } from 'react'
import { useState  } from 'react'
import '../QuoteWidget/QuoteWidget.css'
 const quotes = [
        "El exito es la suma de pequeños esfuerzos.",
        "Nunca dejes de aprender.",
        "La practica hace al maestro.",
        "Confia en el proceso.",
    ];

export const QuoteWidget = ({onDelete}) => {
   

    const [frase] = useState(() => {
    const numberRandom = Math.floor(Math.random() * quotes.length);
        return quotes[numberRandom]
    })

  return (
    <div>
<div className="stack">
  <div className="card">
      <button className="close-btn"onClick={onDelete}> X</button>
      <h2>Frase del dia</h2>
    <div class="image">
      <p>{frase}</p>
    </div>
        

  </div>
</div>

    </div>
  )
}

