<template>
    <div>
     
      <HeaderSearch />
  
      <div class="search-page">
        <!-- Mensaje inicial -->
        <p v-if="!hasSearched && !loading" class="welcome-message">
          Bienvenido, busca las películas que quieras
        </p>
  
        <!-- Cargando -->
        <p v-if="loading" class="loading-message">Buscando películas...</p>
  
        <!-- Resultados -->
        <div v-if="movies.length > 0" class="results-grid">
          <div class="movie-card" v-for="movie in movies" :key="movie.id">
            <div class="image-container">
              <img :src="movie.poster" :alt="movie.title" @click="goToMovie(movie.id)" />
              <div class="overlay-icons">
                <button @click="addToFavorites(movie.id)">❤️</button>
                <button @click="addToWatchLater(movie.id)">⏰</button>
              </div>
            </div>
            <h3>{{ movie.title }} ({{ movie.year }})</h3>
            <p class="description">{{ movie.description }}</p>
          </div>
        </div>
  
        <!-- Sin resultados -->
        <p v-if="hasSearched && movies.length === 0 && !loading" class="no-results">
          No se encontraron resultados.
        </p>
      </div>
    </div>
  </template>
  
  <script>
    import HeaderSearch from '@/views/components/HeaderSearch.vue'
    import PrincipalController from '@/controllers/PrincipalController.js';
    export default {
    controllers: {
      PrincipalController,
      HeaderSearch
    },  
  }

  </script>
  
  <style scoped>
  .search-page {
    padding: 120px 48px 48px;
    color: #ffffff;
    min-height: 100vh;
    background-color: #121212;
  }
  
  .welcome-message,
  .no-results,
  .loading-message {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 80px;
    color: #aaa;
  }
  
  .results-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
  
  .movie-card {
    width: 240px;
    background-color: #1e1e1e;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
  }
  
  .image-container {
    position: relative;
    cursor: pointer;
  }
  
  .image-container img {
    width: 100%;
    border-radius: 6px;
  }
  
  .overlay-icons {
    position: absolute;
    bottom: 8px;
    left: 8px;
    display: flex;
    gap: 8px;
  }
  
  .overlay-icons button {
    background: rgba(0, 0, 0, 0.6);
    border: none;
    padding: 4px 6px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
  }
  
  .description {
    font-size: 0.9rem;
    color: #ccc;
    margin-top: 8px;
  }
  </style>
  