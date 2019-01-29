import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'
import DefineComponent from '@/components/DefineComponent'
import Login from '@/components/login/Login'
import Nav from '@/components/layout/nav'

let routes = [
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
  },
  {
    path: '/nav',
    name: 'nav',
    component: Nav
  }
]
export default routes
