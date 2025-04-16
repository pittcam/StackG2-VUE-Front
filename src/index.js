import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/general/WelcomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: WelcomeView },
  { path: '/login', name: 'Login', component: () => import('@/views/general/LoginView.vue') },
  { path: '/register', name: 'Register', component: () => import('@/views/general/RegisterView.vue') },
  { path: '/principal', name: 'Principal', component: () => import('@/views/general/PrincipalView.vue') },
  { path: '/profile', name: 'Profile', component: () => import('@/views/general/ProfileView.vue') }, 

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
