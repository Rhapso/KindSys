import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/home/Home'
import Teachers from '@/components/home/Teachers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/teachers',
      name: 'Teachers',
      component: Teachers
    }
  ]
})
