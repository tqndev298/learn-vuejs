import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import messages from '@/assets/messages'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/messageFeed',
    name: 'messageFeed',
    component: () => import('../views/MessageFeed.vue'),
    props: (route) => ({ messages: route.query.messages?.length > 0 ? route.query.messages : [] }),
    async beforeEnter(to, from, next) {
      if (!to.query || !to.query.messages) {
        const module = await import('../assets/messages')
        const messages = module.default
        if (messages && messages.length > 0) {
          to.query.messages = messages
        }
      }
      next()
    },
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/Message.vue'),
    props: (route) => ({ content: route.query.content }),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
