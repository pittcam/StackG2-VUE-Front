<template>
    <header class="navbar">
      <div class="logo">MovieNest</div>
      <nav class="nav-links">
        <router-link to="/Iniciar Sesión" class="nav-item">Iniciar sesión</router-link>
        <router-link to="/Crear cuenta" class="nav-item">Crear cuenta</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "NavigationBar",
    
  };
  </script>
  
  <style>
  .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 64px; /* Aumenta el padding horizontal */
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  color: white;
  box-sizing: border-box;
}

  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
    margin-left: auto; /* Alinea a la derecha */
  }
  
  .nav-item {
    margin-left: 20px;
    text-decoration: none;
    color: white; /* Cambia el color según tu diseño */
    transition: color 0.3s;
  }
  
  .nav-item:hover {
    color: #00bcd4; /* Color de hover */
  }
  </style>
  