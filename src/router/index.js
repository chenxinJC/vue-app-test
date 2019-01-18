import Vue from 'vue'
import Router from 'vue-router'
import Login from 'view/login/login'
import Register from 'view/register/register'
import ForgetPassword from 'view/forgetPassword/forgetPassword'
import Home from 'view/home/home'
import Course from 'view/course/course'
import Column from 'view/column/column'
import My from 'view/my/my'
import SetUp from 'view/setUp/setUp'
import ExtInfo from 'view/user/extInfo'
import AlterPassword from 'view/user/alterPassword'
import Article from 'view/article/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      children: [
      ]
    },
    {
      path: '/home',
      name: 'Home',
      meta: {requireAuth: true, cTabBar: true},
      component: Home
    },
    {
      path: '/course',
      name: 'Course',
      meta: {requireAuth: true, cTabBar: true},
      component: Course
    },
    {
      path: '/column',
      name: 'Column',
      meta: {requireAuth: true, cTabBar: true},
      component: Column
    },
    {
      path: '/my',
      name: 'My',
      meta: {requireAuth: true, cTabBar: true},
      component: My
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
      path: '/article/:id',
      name: 'Article',
      meta: {requireAuth: true},
      component: Article
    },
    {
      path: '/setUp',
      name: 'SetUp',
      meta: {requireAuth: true},
      component: SetUp
    },
    {
      path: '/extInfo',
      name: 'ExtInfo',
      meta: {requireAuth: true},
      component: ExtInfo
    },
    {
      path: '/alterPassword',
      name: 'AlterPassword',
      meta: {requireAuth: true},
      component: AlterPassword
    }
  ]
})
