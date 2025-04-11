import apolloClient from '@/models/apollo/apollo' 

import gql from 'graphql-tag'
import HeaderSearch from '@/views/components/HeaderSearch.vue'

export default {
    name: 'ProfileView',
    components: { HeaderSearch },
    async mounted() {
        await this.fetchFavorites()
        await this.fetchWatchLater()
      },
      methods: {
        async fetchFavorites() {
          try {
            const response = await apolloClient.query({
              query: gql`
                query GetFavorites {
                  favorites {
                    id
                    title
                    poster
                  }
                }
              `
            })
            this.favoriteMovies = response.data.favorites.map(movie => ({
              id: movie.id,
              title: movie.title,
              poster: movie.poster ? `https://image.tmdb.org/t/p/w500${movie.poster}` : '/placeholder.jpg'
            }))
          } catch (e) {
            console.error('Error loading favorites:', e)
          }
        },
    
        async fetchWatchLater() {
          try {
            const response = await apolloClient.query({
              query: gql`
                query GetWatchLater {
                  watchLater {
                    id
                    title
                    poster
                  }
                }
              `
            })
            this.watchLaterMovies = response.data.watchLater.map(movie => ({
              id: movie.id,
              title: movie.title,
              poster: movie.poster ? `https://image.tmdb.org/t/p/w500${movie.poster}` : '/placeholder.jpg'
            }))
          } catch (e) {
            console.error('Error loading watch later:', e)
          }
        }
      }
}