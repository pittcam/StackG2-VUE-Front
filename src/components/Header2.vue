<template>
    <header class="navbar">
      <div class="logo">MovieNest</div>
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
  
  </style>
  