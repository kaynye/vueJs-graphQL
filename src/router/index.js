import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateUser from '../components/CreateUser'
import ViewUsers from '../components/ViewUsers'

Vue.use(VueRouter)

const routes = [
  { path: '/users', component: ViewUsers },
  { path: '/createUser', component: CreateUser }]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
