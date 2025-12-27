import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
<<<<<<< HEAD
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
<<<<<<< HEAD
    {
      path: '/timothyTest',
      name: 'timothyTest',
      component: () => import('../views/timothyTestView.vue'),
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/IndexView.vue'),
    },
=======
  
>>>>>>> toung
  ],
})

export default router
