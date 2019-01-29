import Vue from 'vue'
import VueRouter from 'vue-router'
import RouteConfig from './route'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: RouteConfig
})

// 路由控制
router.beforeEach((route, redirect, next) => {
  next()
})

export default router
