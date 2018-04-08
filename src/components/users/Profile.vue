<template>
  <div class="hidden-md-and-up ">
    <!--Toolbar-->
    <v-container>
      <component v-bind:is="'tool-bare'"></component>
    </v-container>
  <v-layout row >
    <v-flex xs12 >
       <v-card>
        <v-card-media
        :src="coverPicture"
        height="200px"
        >
         <v-layout column >
            <v-flex
            class="text-xs-center"
            layout
            align-center
            justify-center
          >
            <v-avatar :size="100" >
              <img :src="avatar">
            </v-avatar>
          </v-flex>
          </v-layout>
        </v-card-media>
         <v-list two-line>
          <v-list-tile to="/edit-profile" >
            <v-list-tile-content>
              <v-list-tile-title class="text title">{{ profilename }}</v-list-tile-title>
              <v-list-tile-sub-title>Edit My profile</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon medium>fas fa-pen-square</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider ></v-divider>
          <v-list-tile to="/trips-recipe">
            <v-list-tile-content>
              <v-list-tile-title class="text title">My Trips</v-list-tile-title>
              <v-list-tile-sub-title>All my Attended Trips</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon medium>fas fa-file-alt</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider ></v-divider>
          <v-list-tile to="/hikers-info">
            <v-list-tile-content>
              <v-list-tile-title class="text title">Hikers</v-list-tile-title>
              <v-list-tile-sub-title>Frequent Travelers Information</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon medium>fas fa-id-badge</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <!--v-divider ></v-divider>
          <v-list-tile to="/Favorite-trips">
            <v-list-tile-content>
              <v-list-tile-title class="text title">Favorites</v-list-tile-title>
              <v-list-tile-sub-title>Favorite Trips and Palces</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon medium>favorite</v-icon>
            </v-list-tile-action>
          </v-list-tile-->
          <v-divider ></v-divider>
          <v-list-tile to="/User-support">
            <v-list-tile-content>
              <v-list-tile-title class="text title">Support</v-list-tile-title>
              <v-list-tile-sub-title>Customer Support</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon medium>fas fa-phone-square</v-icon>
            </v-list-tile-action>
          </v-list-tile>
         </v-list>
       </v-card>
    </v-flex>
  </v-layout>
  <component v-bind:is="'buttom-nav'"></component>
</div>
</template>

<script>
import Toolbare from '@/components/app/Toolbare'
import Buttomnav from '@/components/app/Buttomnav'
  export default {
    data () {
      return {
        coverPicture:"https://img3.goodfon.ru/wallpaper/big/d/7c/star-wars-r2d2-robot-pustynya.jpg",
        avatar:"https://i.pinimg.com/474x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1--flat-icons-free-icon.jpg",
        profilename: 'Sahraoui Delhim',
      }
    },
    components:{
      'tool-bare': Toolbare,
      'buttom-nav': Buttomnav
    }
  }
</script>
