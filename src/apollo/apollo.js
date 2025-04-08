import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
'

// Paso 1: Define el enlace HTTP a tu servidor GraphQL
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // ← ajusta si es HTTPS y puerto real
})

// Paso 2: Agrega el JWT desde Supabase al header de cada request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')  // <- donde lo guardaste en login
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default apolloClient
