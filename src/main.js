// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Navigation from 'vue-navigation'
// import { GetUserInfo, GetUserStatus } from './store/modules/user'
import echarts from 'echarts'
import { ToastPlugin, ConfirmPlugin } from 'vux'
import animate from 'animate.css'
import { fs } from 'utils/auto'
// import axios from 'axios'
// import apiConfig from '../config/api.config'

import 'assets/styles/font-awesome.min.css'
import 'assets/styles/global.scss'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$fs = fs
// axios.defaults.baseURL = apiConfig.baseUrl
Vue.use(Navigation, {router, store})
Vue.use(animate)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

const whiteList = [] // 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log(to, from)
  // let v = store.state.navigation.routes.splice(store.state.navigation.routes.length - 1, 1)
  // console.log(from.query.VNK, v)
  // if (to.name === from.name && from.query.VNK === v) {
  // console.log(store.state.navigation.routes.splice(store.state.navigation.routes.length - 1, 1).splice('?')[1])
  // }
  if (store.getters.token && store.getters.token !== 'undefined') { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      /* if (store.getters.role === null || store.getters.role === '') {
        store.dispatch('GetUserInfo').then(res => {
          console.log(111, res.data.data)
        })
      } else {
        store.dispatch('GetUserStatus').then(res => {
        })
      } */
      store.dispatch('GetUserStatus').then(res => {
      })
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) === -1) { // 在免登录白名单，直接进入
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
