import './ButtonDark.css'
import { useTheme } from '../Context/useTheme'

export const ButtonDark = () => {

  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <label className="switch">

      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
      />

      <span className="slider"></span>

      <span className="clouds_stars"></span>

    </label>
  )
}