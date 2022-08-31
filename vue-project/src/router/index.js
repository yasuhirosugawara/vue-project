import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hoge',
      name: 'hoge',
      component: () => import('../views/HogeView.vue')
    },
    {
      path: '/hogehoge',
      name: 'hogehoge',
      component: () => import('../views/HogehogeView.vue')
    },
    {
      path: '/hoge2',
      name: 'hoge2',
      component: () => import('../views/Hoge2View.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/posts2',
      name: 'posts2',
      component: () => import('../views/Posts2View.vue')
    }
  ]
})

export default router
