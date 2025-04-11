<template>
    <div class="list-user-page">
        <HeaderSearch />

        <div class="user-header">
        <div class="avatar"></div>
        <h2>{{ username }}</h2>
        </div>

        <section class="list-section">
        <h3>Favoritos</h3>
        <div class="scroll-wrapper">
            <button @click="scrollLeft('favorites')" class="scroll-btn">◀</button>
            <div class="scroll-container" ref="favorites">
            <img
                v-for="movie in favoriteMovies"
                :key="movie.id"
                :src="movie.poster"
                alt="Poster"
                class="poster"
            />
            </div>
            <button @click="scrollRight('favorites')" class="scroll-btn">▶</button>
        </div>
        </section>

        <section class="list-section">
        <h3>Ver más tarde</h3>
        <div class="scroll-wrapper">
            <button @click="scrollLeft('watchLater')" class="scroll-btn">◀</button>
            <div class="scroll-container" ref="watchLater">
            <img
                v-for="movie in watchLaterMovies"
                :key="movie.id"
                :src="movie.poster"
                alt="Poster"
                class="poster"
            />
            </div>
            <button @click="scrollRight('watchLater')" class="scroll-btn">▶</button>
        </div>
    </section>
 
  </div>
  <Footer/>
</template>

<script>
    import HeaderSearch from '@/views/components/HeaderSearch.vue'
    import ProfileController from '@/controllers/ProfileController.js'
    import Footer from '@/views/components/Footer.vue'

    export default {
    name: 'ListUserView',
    components: {
        HeaderSearch, Footer
    },
    mixins: [ProfileController]
    }
</script>

<style scoped>
.list-user-page {
  padding: 120px 48px 120px;
  background-color: #121212;
  color: white;
}

.user-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.avatar {
  width: 64px;
  height: 64px;
  background: gray;
  border-radius: 50%;
}

.list-section {
  margin-bottom: 48px;
}

.scroll-wrapper {
  display: flex;
  align-items: center;
}

.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 16px;
  padding: 16px 0;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.poster {
  width: 150px;
  height: 225px;
  object-fit: cover;
  border-radius: 8px;
}

.scroll-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  margin: 0 8px;
}
</style>