Dashboard Personal con Widgetsa
App web que permite al usuario registrarse, iniciar sesion y agregando distintos widgets interactivos.

DEMO https://dashbooard-personal.vercel.app/

API https://dashboardpersonal-g4ecfmfnehctb4cj.brazilsouth-01.azurewebsites.net/

Funcionalidades:

* **Autenticación:** Registro e inicio de sesión de usuarios de forma segura.
* **Personalización:** Agregar y eliminar widgets dinámicamente en el dashboard.
* **Widgets Disponibles:** Reloj en tiempo real, Notas editables, Frases aleatorias (optimizadas con `useMemo`) y Clima consumiendo una API externa.
* **Interactividad:** Los widgets se pueden arrastrar y acomodar en la pantalla.
* **Interfaz:** Soporte para Modo Oscuro / Claro.

Tecnologías utilizadas:

### Frontend:
React (Vite)
React Router DOM
React-draggable  (para mover widget)
CSS

### Backend & Base de Datos:
* .NET(ASP.NET Core Web API)
* Entity Framework Core (EF Core)
* PostgreSQL (Supabase)
  
### Despliegue (Deploy):
* Vercel (Frontend)
* Azure App Service (Backend)
