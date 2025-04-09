import '@/views/assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import { createApp,provide,h } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './models/apollo/apollo'
import { createApolloProvider } from '@vue/apollo-option'  // ← este es nuevo   
import router from '.'

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
      },
      render: () => h(App),
    })
    
app.use(router)
app.use(apolloProvider)
app.mount('#app')
