import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/laylout/Login/Login'
import MainFrame from '../components/laylout/MainFrame/MainFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mainFrame',
      name: 'MainFrame',
      component: MainFrame
    }
  ]
})
