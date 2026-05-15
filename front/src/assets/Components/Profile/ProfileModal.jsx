import {useState,useEffect } from 'react'
import { Button } from '../UIX/Button'
import '../Profile/ProfileModal.css'
import { getProfile,updateProfile } from '../../Services/api'; // Ajusta la ruta
//import { useNavigate } from 'react-router-dom'

export const ProfileModal = ({onClose }) => {

    //const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [formData, setFormData] = useState({
  name: '',
  email: ''
});

   useEffect(() => {
    const email = localStorage.getItem('email'); // Suponiendo que el email es el que se guarda
    const loadProfile = async () => {
        try {
          const data = await getProfile(email ); 
          setProfile(data);
          setFormData({
            name: data.name,
            email: data.email
          });
        } catch (error) {
          console.error("Error al cargar el perfil:", error.message);
        }
    };
    loadProfile();
    }, []);
    if(!profile) {
           return <p>Cargando...</p>;
    }

const handleChange = (e) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

};

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await updateProfile(formData);

    console.log(response);

  } catch(error) {

    console.log(error.message);

  }
};

  return (
      <div className="modal-overlay">
              <div className="modal">
      
                <div className="go-corner">
                  <div onClick={onClose} className="go-arrow">X</div>
                </div>
               
              <form onSubmit={handleSubmit}>

  <input
    type="text"
    name="name"
    placeholder="Nombre"
    value={formData.name}
    onChange={handleChange}
  />

  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
  />

  <button type="submit">
    Guardar
  </button>

</form>
              </div>
    </div>
  )
}

