import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TripDetails from '@/components/trips/TripDetails'
import TripFavorite from '@/components/trips/TripFavorite'
import Login from '@/components/users/Login'
import TripPayment from '@/components/trips/TripPayment'
import Editprofile from '@/components/users/Editprofile'
import Hikersinfo from '@/components/users/Hikersinfo'
import TripRecipe from '@/components/users/TripRecipe'

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
      path: '/Edit-Profile',
      name: 'Edit Profile',
      component: Editprofile
    },
    {
      path: '/Hikers-Info',
      name: 'hikers Info',
      component: Hikersinfo
    },
    {
      path: '/trips-recipe',
      name: 'trips-recipe',
      component: TripRecipe
    },
    {
      path: '/Favorite-trips',
      name: 'trips-favorite',
      component: TripFavorite
    }
  ],
})
