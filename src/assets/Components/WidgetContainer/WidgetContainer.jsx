import '../WidgetContainer/WidgetContainer.css'
import { ClockWidget } from '../Widgets/ClockWidget/ClockWidget'
import { NotesWidget } from '../Widgets/NotesWidget/NotesWidget'
import { QuoteWidget } from '../Widgets/QuoteWidget/QuoteWidget'
import { WeatherWidget } from '../Widgets/WeatherWidget/WeatherWidget'

export const WidgetContainer = ({ widgets,deleteWidget }) => {
  const clocks = widgets.filter(w => w.type === 'clock')
  const notes = widgets.filter(w => w.type === 'notes')
  const frase = widgets.filter(w => w.type === 'quote')
  const clima = widgets.filter(w => w.type === 'weather')
  

  return (
      <div className='widget-container'>

      <div className="col">
        {clocks.map(widget => (
          <ClockWidget
            key={widget.id}
            title={widget.title}
            onDelete={() => deleteWidget(widget.id)}
          />
        ))}
      </div>

      <div className="col">
        {notes.map(widget => (
          <NotesWidget
            key={widget.id}
            title={widget.title}
            onDelete={() => deleteWidget(widget.id)}
          />
        ))}
      </div>

<div className="col">
  {frase.map(widget => (
    <QuoteWidget key={widget.id} onDelete={() => deleteWidget(widget.id)}/>
    
    
  ))}
  </div>     
          
  <div className="col">
  {clima.map(widget => (
    <WeatherWidget key={widget.id} onDelete={() => deleteWidget(widget.id)}/>
  ))}
  </div>
    </div>
  )
}
