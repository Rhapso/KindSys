import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import Home from '@/components/home/Home'
import Teachers from '@/components/home/Teachers'
import NewsList from '@/components/home/news/news-list'

import Notices from '@/components/notice/Notices'
import NoticesDetail from '@/components/notice/NoticesDetail'

import MyClass from '@/components/myClass/MyClass'
import ClassMember from '@/components/myClass/ClassMember'
import ClassInfo from '@/components/myClass/ClassInfo'
import Teacher from '@/components/global/Teacher'
import Parent from '@/components/global/Parent'

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
    },

    {
      path: '/myClass',
      name: 'MyClass',
      component: MyClass
    },
    {
      path: '/myClass/classMember',
      name: 'ClassMember',
      component: ClassMember
    },
    {
      path: '/myClass/classInfo',
      name: 'ClassInfo',
      component: ClassInfo
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
