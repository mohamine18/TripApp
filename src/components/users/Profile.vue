<template>
  <div class="hidden-md-and-up ">
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/">
          <v-icon >chevron_left</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >Profile</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-container>
  <v-layout row >
    <v-flex xs12 >
       <v-card>
        <v-card-media
        :src="coverpicture"
        height="200px"
        >
         <v-layout column >
            <v-flex
            text-xs-center
            layout
            align-center
            justify-center
          >
            <v-avatar :size="100" >
              <img :src="avatar1">
            </v-avatar>
          </v-flex>
          </v-layout>
        </v-card-media>
         <v-list two-line>
          <v-list-tile to="/edit-profile" >
            <v-list-tile-content>
              <v-list-tile-title class="text title">{{ name1 }}</v-list-tile-title>
              <v-list-tile-sub-title>Edit My profile</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon medium>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider ></v-divider>
          <v-list-tile to="/trips-recipe">
            <v-list-tile-content>
              <v-list-tile-title class="text title">My Trips</v-list-tile-title>
              <v-list-tile-sub-title>All my Attended Trips</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon medium>receipt</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider ></v-divider>
          <v-list-tile to="/hikers-info">
            <v-list-tile-content>
              <v-list-tile-title class="text title">Hikers</v-list-tile-title>
              <v-list-tile-sub-title>Frequent Travelers Information</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon medium>group</v-icon>
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
              <v-icon medium>info</v-icon>
            </v-list-tile-action>
          </v-list-tile>
         </v-list>
       </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
  export default {
    data () {
      return {
        coverpicture:"https://img3.goodfon.ru/wallpaper/big/d/7c/star-wars-r2d2-robot-pustynya.jpg",
        avatar1:"https://i.pinimg.com/474x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1--flat-icons-free-icon.jpg",
        name1: 'Sahraoui Delhim',
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
        ]
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
 .picture {
   -webkit-filter: blur(2px); /* Safari 6.0 - 9.0 */
    filter: blur(2px);
 }
 .titlestyle {
   font-family: 'Montserrat', sans-serif;
 }
 .border {
   border: 5px solid red;
 }
</style>
