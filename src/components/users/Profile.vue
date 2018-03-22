<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
       <v-card
         v-for="(perso,id) in personal"
        :key="id"
       >
        <v-card-media 
        :src="perso.avatar"
        height="300px"
        >
         <v-layout column >
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn  color="primary" icon >
                <v-icon >edit</v-icon>
              </v-btn>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-card-title class="primary--text headline titlestyle">
           {{ perso.name }}
        </v-card-title>
       </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        coverpicture:"https://i2.wp.com/www.wallpapersbyte.com/wp-content/uploads/2016/04/Nanpu-Bridge-Huangpu-River-In-China-Shanghai-WallpapersByte-com-1366x768.jpg?resize=620%2C349",
        personal: [
          { 
            avatar:"data:image/jpeg;base64,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", 
            name: 'Sahraoui Delhim', 
            country: 'China', 
            trips: '5' },
        ],
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
</style>
