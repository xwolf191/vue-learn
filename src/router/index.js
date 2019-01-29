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

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('hb', {
  props: ['title', 'id'],
  template: '<span >{{ title }} - {{id}}</span>'
})

export default router
