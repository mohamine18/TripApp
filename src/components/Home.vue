<template>
<div>

<!--content-->
<transition>
  <keep-alive>
    <v-content>
      <component v-bind:is="currentView"></component>
    </v-content>
  </keep-alive>
</transition>

<!--Botoom Navigation-->
<v-layout>
      <v-bottom-nav  
        :value="true"
        :active.sync="currentView"
        color="white"  
        fixed
        app
        class="hidden-md-and-up">
        <!--Home menu-->  
          <v-btn  color="primary" value="trip-list" flat @click.native="currentView='trip-list'" >         
            <span>Home</span>
            <v-icon flat>home</v-icon> 
          </v-btn>
        <!--hot trips-->
          <v-btn flat color="primary" value="trip-finder" @click.native="currentView='trip-finder'">
            <span>Trip Finder</span>
            <v-icon>card_travel</v-icon>
          </v-btn>
        <!--Favorite menu-->
          <v-btn flat color="primary" value="trip-favorite" @click.native="currentView='trip-favorite'">
            <span>favorite</span>
            <v-icon>favorite</v-icon>
          </v-btn>
        <!--ME menu-->
          <v-btn flat color="primary" value="user-profile" @click.native="currentView='user-profile'">
            <span>Me</span>
            <v-icon>account_circle</v-icon>
          </v-btn>
      </v-bottom-nav>
</v-layout>
</div>
</template>

<script>
import TripList from '@/components/trips/TripList'
import TripFinder from '@/components/trips/TripFinder'
import TripFavorite from '@/components/trips/TripFavorite'
import UserProfile from '@/components/users/Profile'
export default {
  data: () => ({
    currentView: 'trip-list',
  }),
  components:{
    'trip-list': TripList,
    'trip-finder': TripFinder,
    'trip-favorite': TripFavorite,
    'user-profile': UserProfile
  }
};
</script>
