import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { supabase } from '@/lib/supabase'

// Paso 1: Define el enlace HTTP a tu servidor GraphQL
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // ← ajusta si es HTTPS y puerto real
})

// Paso 2: Agrega el JWT desde Supabase al header de cada request
const authLink = setContext(async (_, { headers }) => {
  const { data: { session } } = await supabase.auth.getSession()
  const token = session?.access_token

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

// Paso 3: Crea el cliente Apollo con link + caché
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default apolloClient
