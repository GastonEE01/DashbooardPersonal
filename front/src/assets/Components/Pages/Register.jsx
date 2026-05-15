import React, { useState } from 'react';
import "../Pages/Register.css"
import { registerUser } from '../../Services/api'; // Ajusta la ruta
import { BrowserRouter, Routes, Route,Navigate,Link } from 'react-router-dom'

export const Register = () => {

    // 1. Creamos un estado para el formulario
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });

  // 2. Función para actualizar el estado cuando escribes
  const handleChange = (e) => {
     const { name, value } = e.target;
  console.log(name, value);

    setFormData(prev => ({
      ...prev,
    [name]: value
    }));
  };

  // 3. Función que maneja el envío
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
console.log("Contraseña:" + formData.Password);
console.log("Confirmar contraseña:" + formData.ConfirmPassword);
  console.log(formData);

    if(formData.Password.trim() !== formData.ConfirmPassword.trim()) {
        alert("Las contraseñas no coinciden");
        return;
    }

    try {
      const { Name, Email, Password } = formData;
      const response = await registerUser({ Name, Email, Password });
      console.log("Usuario registrado:", response);
    console.log(response);
    } catch (error) {
      alert(error.message);
    }
  };

  return (  
        <div className="login-register-page">
<form className="form"  onSubmit={handleSubmit}>
    <p className="title">Register </p>
        <div className="flex">
        <label>
            <input className="input" type="text" placeholder="" name="Name" onChange={handleChange} required={true} />
            <span>Nombre</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" name="Email" onChange={handleChange} required={true} />
            <span>Email</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="password" placeholder="" name="Password" autoComplete="new-password" onChange={handleChange} required={true} />
        <span>Contraseña</span>
    </label>
    <label>
        <input className="input" type="password" placeholder="" name="ConfirmPassword" autoComplete="new-password" onChange={handleChange} required={true} />
        <span>Confirmar contraseña</span>
    </label>
    <button className="submit" type="submit">Submit</button>
    <p className="signin">
  ¿Ya tienes una cuenta? 
  <Link to="/login"> Inicia sesión</Link>
</p>
  </form>
    </div>
  )
}

