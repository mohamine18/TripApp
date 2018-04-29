import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/app/Home'

import TripDetails from '@/components/trips/TripDetails'
import TripFavorite from '@/components/trips/TripFavorite'

import Explore from '@/components/explore/Explore'
import Category from '@/components/explore/Category'
import Content from '@/components/explore/Content'

import Editprofile from '@/components/users/Editprofile'
import TripRecipe from '@/components/users/TripRecipe'
import Usersupport from '@/components/users/Usersupport'
import Faq from '@/components/users/Faq'
import Register from '@/components/users/Register'
import Profile from '@/components/users/Profile'

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
      path: '/Trip-Details/:tripname',
      name: 'Trip Details',
      component: TripDetails
    },
    {
      path: '/Explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/Explore/:cityname',
      name: 'Category',
      component: Category
    },
    {
      path: '/Explore/:cityname/:cat',
      name: 'Content',
      component: Content
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
      path: '/Profile',
      name: 'Profile',
      component: Profile
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
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Register
    }
  ],
})
