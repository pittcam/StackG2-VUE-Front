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
    <Footer/>
  </template>
  
  <script>
    import HeaderSearch from '@/views/components/HeaderSearch.vue'
    import PrincipalController from '@/controllers/PrincipalController.js'
    import Footer from '@/views/components/Footer.vue'

    export default {
    name: 'PrincipalView',
    components: {
        HeaderSearch, Footer
    },
    mixins: [PrincipalController]
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
    width: 300px;
    height: 500px;
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
  width: 200px;
  height: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
}

  
.overlay-icons {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  justify-content: center;
}

.overlay-icons button {
  background-color: #444; /* Gris oscuro */
  border: none;
  padding: 6px 8px;
  border-radius: 50%;
  color: #fff; /* Icono blanco */
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.overlay-icons button:hover {
  background-color: #666;
}


  
  .description {
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Número de líneas visibles */
  line-clamp: 4; /* Número de líneas visibles */
  -webkit-box-orient: vertical;
}


  </style>
  