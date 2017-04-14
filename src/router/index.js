import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from '@/components/home/Home'
import Teachers from '@/components/home/Teachers'
import NewsList from '@/components/home/news/news-list'
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
      path: '/news/7/0',
      name: 'News',
      component: NewsList
    },
    {
      path: '/teachers',
      name: 'Teachers',
      component: Teachers
    }
  ]
})
