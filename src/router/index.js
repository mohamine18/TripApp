import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/app/Home'

import TripDetails from '@/components/trips/TripDetails'
import TripFavorite from '@/components/trips/TripFavorite'
import TripPictures from '@/components/trips/Trippictures'

import Explore from '@/components/explore/Explore'
import Category from '@/components/explore/Category'
import Content from '@/components/explore/Content'
import Dayplan from '@/components/explore/Dayplan'
import Garound from '@/components/explore/Garound'
import Savedplaces from '@/components/explore/Savedplaces'
import Family from '@/components/explore/family'
import spotdetail from '@/components/explore/spotdetail'

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
      path: '/Trip-Details/:tripname/:tripid',
      name: 'TripDetails',
      component: TripDetails
    },
    {
      path: '/Trip-Pictures/:tripname/:tripid',
      name: 'TripPictures',
      component: TripPictures
    },
    {
      path: '/Explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/Explore/:cityname',
      name: 'Category',
      component: Category,
    },
    {
      path: '/Explore/:cityname/Things_To_Do/:cat',
      name: 'ThingsToDo',
      component: Content
    },
    {
      path: '/Explore/:cityname/Day_Plan/:cat',
      name: 'Dayplan',
      component: Dayplan
    },
    {
      path: '/Explore/:cityname/Saved_Places/:cat',
      name: 'Savedplaces',
      component: Savedplaces
    },
    {
      path: '/Explore/:cityname/Getting_Around/:cat',
      name: 'Garound',
      component: Garound
    },
    {
      path: '/Explore/:cityname/Family_Plan/:cat',
      name: 'Familyplan',
      component: Family
    },
    {
      path: '/Explore/:cityname/:cat/:name/Spot_detail/:articleID',
      name: 'Spotdetail',
      component: spotdetail
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
      path: '/checkout/:tripid/:tripname',
      name: 'Checkout',
      component: Register
    }
  ],
})
