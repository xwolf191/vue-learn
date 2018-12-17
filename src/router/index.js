import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'
import DefineComponent from '@/components/DefineComponent'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/define',
      name: 'DefineComponent',
      component: DefineComponent
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
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
