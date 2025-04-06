<template>
    <header class="navbar">
      <div class="logo">MovieNest</div>
      <nav class="nav-links">
        <router-link to="/Iniciar Sesión" class="nav-item">Sign In</router-link>
        <router-link to="/Crear cuenta" class="nav-item">Create Account</router-link>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 32px;
    background-color: transparent;
    color: white; /* Cambia el color según tu diseño */
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .nav-links {
    display: flex;
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
  