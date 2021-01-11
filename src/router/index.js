import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import TodoList from '../views/TodosList'
import Signup from '../views/Signup'

Vue.use(VueRouter)

function defaultMeta() {
  return {
    authRequired: true
  }
}

const home = {
  path: '/', alias: '/todos', name: 'home',
  component: TodoList, meta: defaultMeta()
}

const signup = { path: '/signup', name: 'sginup', component: Signup }

const login = {
  path: "/login", name: "login",
  component: Login
}

const routes = [
  home,
  signup,
  login,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active"
})

function userIsAuth() {
  console.log('userIsAuth()');
  let user = router.app.$store.state.authStore.user
  return user? true: false
}

function authMidlleware(to, from, next) {
  console.log('authMiddleware()', to)
  if (to.meta.authRequired) {
    if (userIsAuth()) return next()
    next({ name: 'login'})
  } else {
    next()
  }
}

router.beforeEach((to, from, next) => { 
  console.log('GLOBAL-beforeEach()')
  authMidlleware(to, from, next)
})
export default router
