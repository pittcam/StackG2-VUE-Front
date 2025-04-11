import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: WelcomeView },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginView.vue') },
  { path: '/register', name: 'Register', component: () => import('@/views/RegisterView.vue') },
  { path: '/principal', name: 'Principal', component: () => import('@/views/PrincipalView.vue') },
  { path: '/profile', name: 'Profile', component: () => import('@/views/ProfileView.vue') }, 

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
