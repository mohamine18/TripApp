import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TripDetails from '@/components/trips/TripDetails'
import Login from '@/components/users/Login'
import TripPayment from '@/components/trips/TripPayment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Trip-Details',
      name: 'Trip Details',
      component: TripDetails
    },
    {
      path: '/Trip-Payment',
      name: 'Trip Payment',
      component: TripPayment
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ],
})
