import apolloClient from '@/models/apollo/apollo' // Asegúrate que esté bien referenciado

import gql from 'graphql-tag'
import HeaderSearch from '@/views/components/HeaderSearch.vue'

export default {
  name: 'PrincipalView',
  components: { HeaderSearch },
  data() {
    return {
      movies: [],
      hasSearched: false,
      loading: false
    }
  },
  created() {
    const query = this.$route.query.q
    if (query) {
      this.performSearch(query)
    }
  },
  watch: {
    '$route.query.q'(newQuery) {
      if (newQuery) {
        this.performSearch(newQuery)
      }
    }
  },
  methods: {
    async performSearch(query) {
      this.loading = true
      this.hasSearched = true
      this.movies = await this.searchMovies(query)
      this.loading = false
    },

    async searchMovies(query) {
      try {
        const response = await apolloClient.query({
          query: gql`
            query SearchMovies($query: String!) {
              searchMovies(query: $query) {
                id
                title
                overview
                release_date
                poster
              }
            }
          `,
          variables: { query },
        })

        return response.data.searchMovies.map(movie => ({
          id: movie.id,
          title: movie.title,
          year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
          poster: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : '/placeholder.jpg',
          description: movie.overview || 'Sin descripción disponible.'
        }))
      } catch (error) {
        console.error('Error al buscar películas con GraphQL:', error)
        return []
      }
    },

    addToFavorites(movieId) {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []
      if (!favorites.includes(movieId)) {
        favorites.push(movieId)
        localStorage.setItem('favorites', JSON.stringify(favorites))
      }
    },

    addToWatchLater(movieId) {
      let watchLater = JSON.parse(localStorage.getItem('watchLater')) || []
      if (!watchLater.includes(movieId)) {
        watchLater.push(movieId)
        localStorage.setItem('watchLater', JSON.stringify(watchLater))
      }
    },

    goToMovie(movieId) {
      this.$router.push(`/movie/${movieId}`)
    }
  }
}
