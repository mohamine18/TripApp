import Vue from 'vue'
import Router from 'vue-router'
import TripList from '@/components/trips/TripList'
import TripDetails from '@/components/trips/TripDetails'
import Login from '@/components/users/Login'
import Profile from '@/components/users/Profile'
import TripPayment from '@/components/trips/TripPayment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TripList
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
      path: '/User-Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ],
})
