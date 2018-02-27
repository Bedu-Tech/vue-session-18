import Vue from 'vue'
import Router from 'vue-router'
import {isAuthenticated} from '@/services/Reqres'

// Main views
import HomeView from '@/views/Home'
import LoginView from '@/views/Login'

// Dashboard views
import DashboardHomeView from '@/views/Dashboard/Dashboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardHomeView
    }
  ]
})

// Global Guard navigation
router.beforeEach((to, from, next) => {
  if (to.path.includes('dashboard')) {
    if (!isAuthenticated()) {
      localStorage.removeItem('token')
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.path === '/login' || to.path === '/') {
    if (isAuthenticated()) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
