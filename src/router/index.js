import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: login
  // },
  {
    path: '/',
    name: 'saomajiaofei',
    component: () => import('../views/saomajiaofei.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
 
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
