import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import {useState,useEffect } from 'react'
import { Header } from './assets/Components/Header/Header'
import { WidgetContainer } from './assets/Components/WidgetContainer/WidgetContainer'
import { WeatherWidget } from './assets/Components/Widgets/WeatherWidget/WeatherWidget.jsx'
import { Button } from './assets/Components/UIX/Button.jsx'
import { ButtonDark } from './assets/Components/UIX/ButtonDark.jsx'
import { saveWidget,removeWidget  } from './assets/Services/api.js'

// Estilos
import './App.css'

// Paginas 
import { Login } from './assets/Components/pages/Login'
import { Register } from './assets/Components/pages/Register'


function App() {
  // Modo oscuro y claro

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

  const addWidget = async (type) => {
    const email = localStorage.getItem('email');
    const newWiget = {
      type,
      title: titles[type],
      email,
    }
    try{
      const savedWidget = await saveWidget(newWiget);
      console.log("Widget guardado:", saveWidget);
      setWidgets(prev => [...prev, savedWidget]);
    }catch(error){
      console.error("Error al guardar el widget:", error);
    }
  }
    
  
  const deleteWidget = async (id) => {
    console.log("Eliminando widget con id:", id);

    try{
        await removeWidget(id);
          setWidgets(prev => prev.filter(w => w.id !== id))
    }catch(error){
      console.error("Error al eliminar el widget:", error);
    }
  }


  
useEffect(()=> {
  localStorage.setItem('widgets', JSON.stringify(widgets))
},[widgets])



  return (
    <>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route path="/dashboard" element={
      <>
      <Header  addWidget= {addWidget} />
      <WidgetContainer widgets={widgets} deleteWidget={deleteWidget} />
     </>
    } 
    />
       </Routes>

   </BrowserRouter>
    </>
  )
}


export default App
