import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "user" */ '@/views/user/index.vue')
    }
  ]
})

export default router
