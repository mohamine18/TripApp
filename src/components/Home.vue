<template>
<div>
    <!--up Navigation large screen-->
  <v-layout>
      <v-toolbar color="primary" dense dark fixed app class="hidden-sm-and-down">
        <v-toolbar-title d-block>Find Trip</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn  v-for="(menuItem, i) in menuItems" :key="i"  :to="menuItem.to" flat>
          <v-icon left v-html="menuItem.icon" ></v-icon> 
         {{ menuItem.title }}
        </v-btn>
      </v-toolbar>
  </v-layout>

<!--up Navigation small screen-->
  <v-layout>
      <v-toolbar color="primary" dark dense fixed app flat class="hidden-md-and-up">
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block> 
          <span >Find Trip</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y >
          <v-btn icon slot="activator">
            <v-icon>apps</v-icon>
          </v-btn>
          <v-card>
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i" @click="" value="true">
                <v-list-tile-action>
                  <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.text"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-switch v-model="switchcolor" color="primary"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Switch to dark theme</v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-card>
          </v-menu>
          <v-btn icon @click="">
          <v-badge overlap color="secondary">
            <span slot="badge">6</span>
            <v-icon >notifications</v-icon>
          </v-badge>
        </v-btn>
      </v-toolbar>
</v-layout>

<!-- Menu Dialogue-->
<v-layout>
      <v-dialog v-model="menudialog" width="250px">
        <v-card>
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in items"
            :key="i"
            @click=""
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.text"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list> 
        </v-card>
      </v-dialog>
</v-layout>

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
    switchcolor: false,
        menudialog: false,
        menuItems: [
          { icon: "home", title: "Home", to:"/" },
          { icon: "room", title: "Organize a meetup", to:"/" }
        ],
        items: [
          { icon: "explore", text: "SeeYou Trips" },
          { icon: "extension", text: "More services" }
        ],
  }),
  components:{
    'trip-list': TripList,
    'trip-finder': TripFinder,
    'trip-favorite': TripFavorite,
    'user-profile': UserProfile
  }
};
</script>
