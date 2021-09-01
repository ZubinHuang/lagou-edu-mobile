import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Course from '@/views/course/index'
import Login from '@/views/login/index'
import Learn from '@/views/learn/index'
import User from '@/views/user/index'
import CourseInfo from '@/views/course-info/index'
import CourseVideo from '@/views/course-info/video'
import Pay from '@/views/pay/index'
import ErrorPage from '@/views/error-page/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 把课程当做首页
  // {
  //   path:'/',
  //   name:'course',
  //   component:() =>(/* webpackChunkName: 'course' */'@/views/course/index')
  // } ,
  // 或者如下
  {
    path: '/',
    name: 'course',
    component: Course
  },
  {
    path: '/learn',
    name: 'learn',
    component: Learn,
    //是否需要登录
    meta: { requiresAuth: true }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    //是否需要登录
    meta: { requiresAuth: true }
  },
  {
    // :courseId动态路由传参，进入不同课程详情页
    path: '/course-info/:courseId',
    name: 'course-info',
    component: CourseInfo,
    props:true
  },
  {
    // :courseId动态路由传参，进入不同课程详情页
    path: '/lesson-video/:lessonId',
    name: 'lesson-video',
    component: CourseVideo,
    props:true
  },
  //支付页面  :添加路由，⽀付⻚需登录后才能访问
  {
    path: '/pay/::courseId',
    name: 'pay',
    component: Pay,
    //是否需要登录
    meta: { requiresAuth: true },
    props:true
  },
  // 访问不到的页面放在路由最后
  {
    path: '*',
    name: 'error-page',
    component: ErrorPage
  },
]

const router = new VueRouter({
  routes,
})
// 导航守卫进⾏登录检测与跳转
router.beforeEach((to, from, next) => {
  // 验证 to 路由是否需要进⾏身份认证
  /*
    在MDN web文档中查看Array.from使用方法看到在箭头函数中不使用return就能返回数据，对与一些简单的返回方法，可以简便写法
  */
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 验证 Vuex 的 store 中的登录⽤户信息是否存储
    if (!store.state.user) {
      // 未登录，跳转到登录⻚,后续不用执行
      return next({
        name: 'login',
        query: {
          // redirect是跳转到登录页面前的那个页面路径
          redirect: to.fullPath
        }
      })
    }
    // 已经登录，允许通过，不需要再登录
    next()
  } else {
    next()
  }
})
export default router
