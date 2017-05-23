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
import Activities from '@/components/notice/Activities'
import ActivitiesDetail from '@/components/notice/ActivitiesDetail'

import MyClass from '@/components/myClass/MyClass'
import ClassMember from '@/components/myClass/ClassMember'
import ClassInfo from '@/components/myClass/ClassInfo'
import Teacher from '@/components/global/Teacher'
import Parent from '@/components/global/Parent'

import Attendance from '@/components/attendance/Attendance'
import Attendance1 from '@/components/attendance/Attendance.1'
import AttendanceDetail from '@/components/attendance/AttendanceDetail'
import AttendanceDate from '@/components/attendance/AttendanceDate'
import AttendanceRecord from '@/components/attendance/AttendanceRecord'

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
    },
    {
      path: '/attendance',
      name: 'Attendance',
      component: Attendance
    },
    { // just for demo
      path: '/attendance/1',
      name: 'Attendance1',
      component: Attendance1
    },
    {
      path: '/attendance/detail',
      name: 'AttendanceDetail',
      component: AttendanceDetail
    },
    {
      path: '/attendance/date',
      name: 'AttendanceDate',
      component: AttendanceDate
    },
    {
      path: '/attendance/record',
      name: 'AttendanceRecord',
      component: AttendanceRecord
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/activities/detail',
      name: 'ActivitiesDetail',
      component: ActivitiesDetail
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
