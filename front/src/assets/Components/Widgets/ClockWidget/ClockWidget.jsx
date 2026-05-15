import { useState,useEffect } from 'react'
import '../ClockWidget/ClockWidget.css'

export const ClockWidget = ({onDelete }) => {
  const [time, setTime] = useState(new Date())
  //const {darkMode } = useTheme()
  const horas = time.getHours().toString().padStart(2, '0')
const minutos = time.getMinutes().toString().padStart(2, '0')

const mes = (time.getMonth() + 1).toString().padStart(2, '0')
const dia = time.getDate().toString().padStart(2, '0')
const anio = time.getFullYear()

// Esto junta todo para que hoy devuelva "05.12.2026" automáticamente
const fechaPipboy = `${mes}.${dia}.${anio}`
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (

<div className="pipboy-wrapper">

  <input type="radio" id="tab-stat" name="pip-tabs" checked="" />
  <input type="radio" id="tab-inv" name="pip-tabs" />
  <input type="radio" id="tab-data" name="pip-tabs" />

  <div className="pipboy-chassis">
    <button className="pipboy-close-btn" onClick={onDelete}>X</button>
    <div className="screw tl"></div>
    <div className="screw tr"></div>
    <div className="screw bl"></div>
    <div className="screw br"></div>

    <div className="crt-screen">
      <div className="screen-glass"></div>
      <div className="scanlines"></div>

      <div className="boot-sequence">
        <header className="top-bar">
          <div className="dynamic-title flicker-text"></div>
          <div className="line flexible"></div>
          <div className="stats-info">
            <span>HP <span className="bold">348/450</span></span>
            <span>AP <span className="bold">67/67</span></span>
            <span className="pulse-icon">⚡</span>
          </div>
        </header>

        <main className="middle-section">
          <div className="tab-content content-stat">
            <aside className="side-menu">
              <div>CND</div>
              <div>RAD</div>
              <div>EFF</div>
              <div className="active-box-static">CLK</div>
            </aside>

            <section className="clock-display">
  <div className="terminal-block">
    {/* HORA REAL: Separada para que el parpadeo de los dos puntos funcione perfecto */}
    <div className="time">
      {horas}
      <span className="blink-colon">:</span>
      {minutos}
    </div>
  </div>

  {/* FECHA REAL: Reemplaza al texto fijo "02.23.2026" */}
  <div className="date">{fechaPipboy}</div>
</section>


            <aside className="right-menu">
              <div className="hazard-symbol">
                <div className="hazard-core"></div>
              </div>
              <div className="rad-text">RADS</div>
            </aside>
          </div>

          <div className="tab-content content-inv">
            <ul className="inventory-list">
              <li>
                <span className="item-name">Stimpak (12)</span>
                <span className="item-wgt">WGT 0.5</span>
              </li>
              <li className="active-terminal-line">
                <span className="item-name">10mm Pistol</span>
                <span className="item-wgt">WGT 4.0</span>
              </li>
              <li>
                <span className="item-name">Nuka-Cola Quantum</span>
                <span className="item-wgt">WGT 1.0</span>
              </li>
              <li>
                <span className="item-name">RadAway (5)</span>
                <span className="item-wgt">WGT 0.5</span>
              </li>
              <li>
                <span className="item-name">Power Armor Core</span>
                <span className="item-wgt">WGT 3.0</span>
              </li>
            </ul>
          </div>

          <div className="tab-content content-data">
            <div className="radar-container">
              <span></span>
              <div className="blip"></div>
            </div>
            <div className="radar-text flicker-fast">SEARCHING SATELLITE...</div>
          </div>
        </main>

        <footer className="bottom-bar">
          <label htmlFor="tab-stat" className="nav-item">STAT</label>
          <div className="line flexible"></div>
          <label htmlFor="tab-inv" className="nav-item">INV</label>
          <div className="line flexible"></div>
          <label htmlFor="tab-data" className="nav-item">DATA</label>
          <div className="line flexible"></div>

          <div className="radio-visualizer">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</div>
  )
}

/* <div className = "widge">
                  <button onClick={onDelete}> X</button>
        <div class="widge-overlay"></div>
              <h3>{title}</h3>
            <div class="widge-inner">

      <p>{time.toLocaleTimeString()}</p> */