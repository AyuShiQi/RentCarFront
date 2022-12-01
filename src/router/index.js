import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let LoginView = () => import('../views/LoginView');
let HomeView = () => import('../views/HomeView');


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'homeWithNoLogin',
    component: HomeView
  },
  {
    path: '/login',
    name : 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
