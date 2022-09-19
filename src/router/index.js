import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
// import CardProduct from '../views/AboutView.vue'
import CardProduct from '../components/CardProduct.vue'
// import App from '../views/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CardProduct',
    component:CardProduct
  },
  {
    path: '/',
    name: 'App',
    // component:App
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
