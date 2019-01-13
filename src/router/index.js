import Vue from 'vue'
import Router from 'vue-router'
import Login from 'view/login/login'
import Register from 'view/register/register'
import ForgetPassword from 'view/forgetPassword/forgetPassword'
import Home from 'view/home/home'
import Course from 'view/course/course'
import Column from 'view/column/column'
import My from 'view/my/my'
import Article from 'view/article/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/home',
      name: 'Home',
      meta: {requireAuth: true},
      component: Home
    },
    {
      path: '/course',
      name: 'Course',
      meta: {requireAuth: true},
      component: Course
    },
    {
      path: '/column',
      name: 'Column',
      meta: {requireAuth: true},
      component: Column
    },
    {
      path: '/my',
      name: 'My',
      meta: {requireAuth: true},
      component: My
    },
    {
      path: '/article',
      name: 'Article',
      meta: {requireAuth: true},
      component: Article
    }
  ]
})
