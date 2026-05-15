import '../WidgetContainer/WidgetContainer.css'
import { ClockWidget } from '../Widgets/ClockWidget/ClockWidget'
import { NotesWidget } from '../Widgets/NotesWidget/NotesWidget'
import { QuoteWidget } from '../Widgets/QuoteWidget/QuoteWidget'
import { WeatherWidget } from '../Widgets/WeatherWidget/WeatherWidget'
import { Widge } from '../UIX/Widge'
import Draggable from 'react-draggable';
import { useRef } from 'react'; 
import { useTheme } from '../Context/useTheme'

export const WidgetContainer = ({ widgets, deleteWidget }) => {
  
  const nodeRef = useRef(null); 
  const {darkMode } = useTheme()

  return (
    <div className={`widget-container ${darkMode ? 'dark' : 'light'}`}>
      {widgets.map(widget => {

        return (
          <Draggable 
            key={widget.id} 
            nodeRef={nodeRef} 
            bounds="parent" 
            defaultPosition={{x: 20, y: 20}}
            cancel=".pipboy-close-btn, button, input"
          >
            {/* 4. Vincular la referencia al div con ref={nodeRef} */}
            <div className="widget" ref={nodeRef}> 
              {widget.type === 'clock' && (
                <ClockWidget  onDelete={() => deleteWidget(widget.id)} />
              )}
              {widget.type === 'notes' && (
                <NotesWidget title={widget.title} onDelete={() => deleteWidget(widget.id)} />
              )}
              {widget.type === 'quote' && (
                <QuoteWidget onDelete={() => deleteWidget(widget.id)} />
              )}
              {widget.type === 'weather' && (
                <WeatherWidget onDelete={() => deleteWidget(widget.id)} />
              )}
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};
         


/*


  <div className='widget-container'>
      
        {clocks.map(widget => (
          
          <ClockWidget
            key={widget.id}
            title={widget.title}
            onDelete={() => deleteWidget(widget.id)}
          />
        ))}

        {notes.map(widget => (
          <NotesWidget
            key={widget.id}
            title={widget.title}
            onDelete={() => deleteWidget(widget.id)}
          />
        ))}

<div className="col">
  {frase.map(widget => (
    <QuoteWidget key={widget.id} onDelete={() => deleteWidget(widget.id)}/>
    
    
  ))}
          
  {clima.map(widget => (
    <WeatherWidget key={widget.id} onDelete={() => deleteWidget(widget.id)}/>
  ))}
  </div>
    </div>*/