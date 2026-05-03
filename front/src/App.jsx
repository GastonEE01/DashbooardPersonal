import { useState,useEffect } from 'react'
import { Header } from './assets/Components/Header/Header'
import { WidgetContainer } from './assets/Components/WidgetContainer/WidgetContainer'
import { WeatherWidget } from './assets/Components/Widgets/WeatherWidget/WeatherWidget.jsx'
import { Button } from './assets/Components/UIX/Button.jsx'
import { ButtonDark } from './assets/Components/UIX/ButtonDark.jsx'
import './App.css'
/*
const widgets = [
  { id: 1, type: 'clock', title: 'Reloj' },
  { id: 2, type: 'notes', title: 'Notas' },
]*/

function App() {

  const [widgets,setWidgets] =  useState(() => {
    const saved = localStorage.getItem('widgets')
    return saved ? JSON.parse(saved) : []
  }) // mal iniciado  const [widget,setWidget] =  useState() 

  const titles = {
    clock: 'Reloj',
    notes: 'Notas',
    quote: 'Frase',
    weather: 'Clima',
  }

  const addWidget = (type) => {
    const newWiget = {
      id: Date.now(),
      type,
      title: titles[type],
    }


  setWidgets([...widgets,newWiget])
  }

  const deleteWidget = (id) => {
  setWidgets(prev => prev.filter(w => w.id !== id))
}
  
useEffect(()=> {
  localStorage.setItem('widgets', JSON.stringify(widgets))
},[widgets])



  return (
    <>

      <Header  addWidget= {addWidget} />
      <WidgetContainer widgets={widgets} deleteWidget={deleteWidget} />

      <WeatherWidget />

      <Button></Button>
      <ButtonDark></ButtonDark>
    </>
  )
}

export default App
