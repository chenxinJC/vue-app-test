import Vue from 'vue'
import Router from 'vue-router'
import Login from 'view/login/login'
import Home from 'view/home/home'
import Article from 'view/article/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      meta: {requireAuth: true},
      component: Home
    },
    {
      path: '/article',
      name: 'Article',
      meta: {requireAuth: true},
      component: Article
    }
  ]
})
