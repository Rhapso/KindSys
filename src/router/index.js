import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import Home from '@/components/home/Home'
import Teachers from '@/components/home/Teachers'
import NewsList from '@/components/home/News'
import NewsDetail from '@/components/home/NewsDetail'
import Pictures from '@/components/home/Pictures'

import Notices from '@/components/notice/Notices'
import NoticesDetail from '@/components/notice/NoticesDetail'

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
      path: '/news',
      name: 'News',
      component: NewsList
    },
    {
      path: '/news/detail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/teachers',
      name: 'Teachers',
      component: Teachers
    },
    {
      path: '/pictures',
      name: 'Pictures',
      component: Pictures
    },
    {
      path: '/notices',
      name: 'Notices',
      component: Notices
    },
    {
      path: '/notices/detail',
      name: 'NoticesDetail',
      component: NoticesDetail
    }
  ]
})
