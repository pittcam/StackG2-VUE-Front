import apolloClient from '@/models/apollo/apollo'
import gql from 'graphql-tag'
import HeaderSearch from '@/views/components/HeaderSearch.vue'

const ADD_TO_FAVORITES = gql`
  mutation AddToFavorites($userId: ID!, $movieId: ID!) {
    addToFavorites(userId: $userId, movieId: $movieId) {
      id
    }
  }
`

const ADD_TO_WATCH_LATER = gql`
  mutation AddToWatchLater($userId: ID!, $movieId: ID!) {
    addToWatchLater(userId: $userId, movieId: $movieId) {
      id
    }
  }
`

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
          poster: movie.poster
            ? `https://image.tmdb.org/t/p/w500${movie.poster}`
            : '/placeholder.jpg',
          description: movie.overview || 'Sin descripción disponible.'
        }))
      } catch (error) {
        console.error('Error al buscar películas con GraphQL:', error)
        return []
      }
    },

    async addToFavorites(movieId) {
      const userId = localStorage.getItem('userId')
      if (!userId) {
        console.error('No se encontró el ID de usuario.')
        return
      }

      try {
        await apolloClient.mutate({
          mutation: ADD_TO_FAVORITES,
          variables: { userId, movieId }
        })
        console.log('Película agregada a favoritos')
      } catch (error) {
        console.error('Error al agregar a favoritos:', error)
      }
    },

    async addToWatchLater(movieId) {
      const userId = localStorage.getItem('userId')
      if (!userId) {
        console.error('No se encontró el ID de usuario.')
        return
      }

      try {
        await apolloClient.mutate({
          mutation: ADD_TO_WATCH_LATER,
          variables: { userId, movieId }
        })
        console.log('Película agregada a ver más tarde')
      } catch (error) {
        console.error('Error al agregar a ver más tarde:', error)
      }
    },

    goToMovie(movieId) {
      this.$router.push(`/movie/${movieId}`)
    }
  }
}
