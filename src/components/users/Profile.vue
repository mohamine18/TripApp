<template>
  <v-layout row >
    <v-flex xs12 >
       <v-card>
        <v-card-media 
        :src="coverpicture"
        height="250px"
        >
         <v-layout column >
            <v-flex
            text-xs-center
            layout
            align-center
            justify-center
          >
            <v-avatar :size="150" >
              <img :src="avatar1">
            </v-avatar>
          </v-flex>
          </v-layout>
        </v-card-media>
         <v-list two-line>
          <v-list-tile @click="" >
            <v-list-tile-content>
              <v-list-tile-title class="text headline">{{ name1 }}</v-list-tile-title>
              <v-list-tile-sub-title>Edit My profile</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider ></v-divider>
          <v-list-tile @click="">
            <v-list-tile-content>
              <v-list-tile-title class="text title">My Trips</v-list-tile-title>
              <v-list-tile-sub-title>All my Attended Trips</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>receipt</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider ></v-divider>
          <v-list-tile @click="">
            <v-list-tile-content>
              <v-list-tile-title class="text title">Hikers</v-list-tile-title>
              <v-list-tile-sub-title>Frequent Travelers Information</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>group</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider ></v-divider>
          <v-list-tile @click="">
            <v-list-tile-content>
              <v-list-tile-title class="text title">Favorites</v-list-tile-title>
              <v-list-tile-sub-title>Favorite Trips and palces</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>favorite</v-icon>
            </v-list-tile-action>
          </v-list-tile>
         </v-list>
       </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        coverpicture:"data:image/jpeg;base64,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",
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
