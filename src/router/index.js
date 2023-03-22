import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/star-list',
      name: 'starList',
      component: () => import('../views/StarList.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/BackOffice.vue')
    }
  ]
})

export default router
