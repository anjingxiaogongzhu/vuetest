import Vue from 'vue'
import Router from 'vue-router'

const syncModulesImport = (component) => {
  return import('../components/modules/'+component)
}

Vue.use(Router)

// const mainFrame = r => require.ensure([], () => r(modules.mainFrame), 'mainFrame')
// const login = r => require.ensure([], () => r(modules.login), 'login')
const login = () => syncModulesImport('login')
const mainFrame = () => syncModulesImport('mainFrame')
const experience = () => syncModulesImport('experience')
const billManage = () => syncModulesImport('billManage')


export default new Router({
  routes: [{
      path: '/',
      redirect() {
        return '/login'
      }
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {
      path: '/mainFrame',
      name: '',
      component: mainFrame,
      children: [
        {
          path: '/experience',
          name: '历程',
          component: experience
        },
        {
          path: '/billManage',
          name: '账户管理',
          component: billManage
        }
      ]
    },

  ]
})
