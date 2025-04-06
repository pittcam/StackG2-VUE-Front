import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import { createApp,provide,h } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './apollo/apollo'
import router from './router'

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
      },
      render: () => h(App),
    })
    
app.use(router)

app.mount('#app')
