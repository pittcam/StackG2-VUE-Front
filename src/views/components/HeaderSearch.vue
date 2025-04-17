<template> 
    <header class="navbar">
      <router-link to="/principal" class="logo">MovieNest</router-link>
  
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          placeholder="Buscar películas, series..."
          class="search-input"
        />
      </div>
  
      <nav class="nav-links">
        <router-link to="/profile" class="nav-item">Mi perfil</router-link>
        <button @click="logout" class="nav-item logout-button">Cerrar sesión</button>
      </nav>
    </header>
</template>
  
  <script>
    import HeaderSearchController from '@/controllers/HeaderSearchController.js'
  
    export default HeaderSearchController
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 64px;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    color: white;
    box-sizing: border-box;
  }
  
  .logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  }

  
  .search-container {
    flex: 1;
    display: flex;
    justify-content: center;
    margin: 0 32px;
  }
  
  .search-input {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
  }
  
  .nav-item {
    margin-left: 20px;
    text-decoration: none;
    color: white;
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .nav-item:hover {
    color: #00bcd4;
  }
  
  .user-name {
    font-weight: 500;
  }
  
  .logout-button {
    padding: 0;
  }
  </style>
  