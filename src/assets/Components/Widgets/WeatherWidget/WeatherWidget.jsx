import {useEffect, useState} from 'react'

export const WeatherWidget = ({onDelete}) => {
    const api = 'https://wttr.in/Buenos_Aires?format=j1'
    const [weather,setWeather] = useState(null)

    useEffect(() => {
  fetch(api)
    .then(res => res.json())
    .then(data => setWeather(data))
    }, [])
    if(!weather) return <p>Cargando clima</p>
    
    const temp = weather.current_condition[0].temp_C
  const desc = weather.current_condition[0].weatherDesc[0].value
 
  return (
    
   <div className="widget">
    <button onClick={onDelete}> X</button>

      <h3>Clima</h3>
      <p>{temp}°C</p>
      <p>{desc}</p>
    </div>
  )
  
}

