// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// import { GetUserInfo, GetUserStatus } from './store/modules/user'
import echarts from 'echarts'
import { ToastPlugin } from 'vux'
// import axios from 'axios'
// import apiConfig from '../config/api.config'

import 'assets/styles/font-awesome.min.css'
import 'assets/styles/global.scss'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
// axios.defaults.baseURL = apiConfig.baseUrl

Vue.use(ToastPlugin)

const whiteList = ['/login', '/forgetPassword', '/register'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (store.getters.token && store.getters.token !== 'undefined') { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      console.log(555, store.getters)
      console.log(555, store.state.user.rolename)
      console.log(555, store.getters.uuid)
      console.log(555, store.getters.roles)
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(res => {
          console.log(555, store.getters.roles)
          console.log(333, res)
        })
      } else {
        store.dispatch('GetUserStatus').then(res => {
          console.log(444, res)
        })
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
