const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
  console.log(credentials);
const res = await fetch(`${API_URL}/api/Login/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials), // Aquí envías el usuario y contraseña
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
    }

  return data;
};

export const registerUser = async (credentials) => {
const res = await fetch(`${API_URL}/api/Login/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials), // Aquí envías el usuario y contraseña
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getProfile = async (email) => {
  const res = await fetch(`${API_URL}/api/Profile/Profile?email=${email}`);
     
    const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
  }

  export const updateProfile = async (profileData) => {
  const res = await fetch(`${API_URL}/api/Profile/Profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profileData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
  }

  export const saveWidget = async (widgetData) => {
  const res = await fetch(`${API_URL}/api/Widget/Widgets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(widgetData),
  });

  const data = await res.json();
      console.log("Widget guardado:", data);

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
  }

  export const removeWidget = async (id) => {
  const res = await fetch(`${API_URL}/api/Widget/Widgets/${id}`, {
    method: 'DELETE',
  });
  
  const data = await res.json();
console.log("Widget eliminado:", data);
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
  }