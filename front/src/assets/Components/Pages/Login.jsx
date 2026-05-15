import React, { useState } from 'react';
import "../Pages/Register.css"
import { loginUser } from '../../Services/api'; // Ajusta la ruta
import { BrowserRouter, Routes, Route,Navigate,Link, useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Email: '',
        Password: ''
      });
    
      // 2. Función para actualizar el estado cuando escribes
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      // 3. Función que maneja el envío
      const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
    
        try {
          const response = await loginUser(formData);
            console.log("RESPONSE:", response);
  console.log("EMAIL RESPONSE:", response.Email);

         localStorage.setItem('email', response.email); // Guarda el token en localStorage
  console.log("STORAGE:", localStorage.getItem('email'));

         navigate("/dashboard");
         console.log("Login exitoso:", response);
        } catch (error) {
          alert(error.message);

        }
      };

  return (
    <div className="login-register-page">
<form className="form" onSubmit={handleSubmit}>
    <p className="title">Login </p>
        <div className="flex">
        
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" name="Email" onChange={handleChange} required={true} />
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" name="Password" onChange={handleChange} required={true} />
        <span>Contraseña</span>
    </label>
    
    <button className="submit">Submit</button>
   <p className="signin">
  ¿No tienes una cuenta? 
  <Link to="/register"> Regístrate</Link>
</p>
</form>
    </div>
  )
}

