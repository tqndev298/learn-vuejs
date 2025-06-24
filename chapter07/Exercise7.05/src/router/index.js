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
    path: '/message/:id',
    name: 'message',
    component: () => import('../views/Message.vue'),
    props: true,
    // (route) => ({
    //   id: route.params.id,
    //   content: route.query.content,
    // })
    beforeEnter: beforeEnterMessage,
    children: [
      {
        path: 'author',
        name: 'messageAuthor',
        props: true,
        component: () => import('../views/MessageAuthor.vue'),
        beforeEnter: beforeEnterMessage,
      },
      {
        path: 'info',
        name: 'messageInfo',
        props: true,
        component: () => import('../views/MessageInfo.vue'),
        beforeEnter: beforeEnterMessage,
      },
    ],
  },
]

async function beforeEnterMessage(to, from, next) {
  const id = to.params.id
  const module = await import('../assets/messages')
  const messages = module.default
  if (messages && messages.length > 0 && id < messages.length) {
    to.params.message = messages[id]
  }
  next()
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
