import apolloClient from '@/models/apollo/apollo'
import HeaderSearch from '@/views/components/HeaderSearch.vue'
import gql from 'graphql-tag'

export default {
  name: 'ProfileView',
  components: { HeaderSearch },

  data() {
    return {
      favoriteMovies: [],
      watchLaterMovies: []
    }
  },

  async mounted() {
    await this.fetchFavorites()
    await this.fetchWatchLater()
  },

  methods: {
    async fetchFavorites() {
      try {
        const userId = localStorage.getItem('userId')
        if (!userId) {
          console.warn('No hay userId en localStorage')
          return
        }

        const response = await apolloClient.query({
          query: gql`
            query GetFavorites($user_id: ID!) {
              getFavoriteMovies(user_id: $user_id) {
                id
                poster
              }
            }
          `,
          variables: {
            user_id: userId
          }
        })

        this.favoriteMovies = response.data.getFavoriteMovies.map(movie => ({
          id: movie.id,
          poster: movie.poster || '/placeholder.jpg'
        }))
      } catch (e) {
        console.error('❌ Error loading favorites:', e)
      }
    },

    async fetchWatchLater() {
      try {
        const userId = localStorage.getItem('userId')
        if (!userId) {
          console.warn('No hay userId en localStorage')
          return
        }

        const response = await apolloClient.query({
          query: gql`
            query GetWatchLater($user_id: ID!) {
              getWatchLaterMovies(user_id: $user_id) {
                id
                poster
              }
            }
          `,
          variables: {
            user_id: userId
          }
        })

        this.watchLaterMovies = response.data.getWatchLaterMovies.map(movie => ({
          id: movie.id,
          poster: movie.poster || '/placeholder.jpg'
        }))
      } catch (e) {
        console.error('❌ Error loading watch later:', e)
      }
    }
  }
}
