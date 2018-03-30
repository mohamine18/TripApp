import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import TripDetails from '@/components/trips/TripDetails'
import TripFavorite from '@/components/trips/TripFavorite'
import TripPayment from '@/components/trips/TripPayment'

import Editprofile from '@/components/users/Editprofile'
import TripRecipe from '@/components/users/TripRecipe'
import Usersupport from '@/components/users/Usersupport'
import Faq from '@/components/users/Faq'

import Hikersinfo from '@/components/hikers/Hikersinfo'
import Addhikersinfo from '@/components/hikers/Addhikersinfo'
import Edithikersinfo from '@/components/hikers/Edithikersinfo'

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
    },
    {
      path: '/User-support',
      name: 'user-support',
      component: Usersupport
    },
    {
      path: '/Add-Hiker-info',
      name: 'Add-Hiker-info',
      component: Addhikersinfo
    },
    {
      path: '/Edit-Hiker-info',
      name: 'Edit-Hiker-info',
      component: Edithikersinfo
    },
    {
      path: '/Frequently-Asked-Questions',
      name: 'Faq',
      component: Faq
    }
  ],
})
