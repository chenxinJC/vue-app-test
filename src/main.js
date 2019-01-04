// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import echarts from 'echarts'
// import axios from 'axios'
// import apiConfig from '../config/api.config'

import 'assets/styles/reset.css'
import 'assets/styles/border.css'
import 'assets/styles/index.scss'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
// axios.defaults.baseURL = apiConfig.baseUrl

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (store.getters.token && store.getters.token !== 'undefined') { // 判断是否有token
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
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
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})