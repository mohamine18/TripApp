<template>
            <v-container grid-list-lg>
              <!--Toolbar-->
              <v-container >
                <v-toolbar color="primary" dark dense fixed  flat >
                  <v-btn icon :to="{ name:'Profile'}">
                    <v-icon >close</v-icon>
                  </v-btn>
                  <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
                    <span >Favorite Trips</span>
                  </v-toolbar-title>
                </v-toolbar>
              </v-container>
            <!--Trip List-->
            <v-layout row wrap >
              <v-flex xs12 md6 lg4 v-for="(card,index) in cards" :key="index">
                <v-card class="elevation-1"  >
                  <v-card-media
                    :src="card.src"
                    height="150px"
                  >
                  </v-card-media>
                    <v-card-media height="60px">
                      <v-card-title>
                        <div>
                          <span class="headline" v-text="card.title"></span><br>
                          <span class="grey--text" v-text="card.location"></span>
                        </div>
                      </v-card-title>
                    </v-card-media>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon class="primary--text"
                      @click="card.fav = !card.fav" >
                      <v-icon v-if="card.fav == false" >favorite_border</v-icon>
                      <v-icon v-else >favorite</v-icon>
                    </v-btn>
                    <v-btn icon class="primary--text">
                      <v-icon large v-if="ExpandMoreLess(index)" >expand_more</v-icon>
                      <v-icon large v-else>expand_less</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

</template>

<script>
  export default {
    data () {
      return {
        show:false,
        expand:[],
        cards: [
            {
              id:'123456',
              title: "Pre-fab homes",
              src: "http://www.openskydeals.com/wp-content/uploads/2015/04/499-punta-cana-all-inclusive-trip-wair-save-430.jpg",
              location: "USTB, Beijing China",
              fav: true,
            },
            {
              id:'123457',
              title: "Favorite road trips",
              src:"https://captainsmanorinn.com/wp-content/uploads/2013/01/sandwhich-300x100.jpg",
              location: "USTB, Beijing China",
              fav: true,
            }
          ],
      }
    },
    methods: {
      // openExpand(key){
      //   var expanded = this.cards[key].id
      //   if (show == false ) {
      //
      //   },
     ExpandMoreLess(index){
       // var expanded = this.cards[index].id;
       //   if (this.expand == expanded) {
       //     return true
       //   }
       return true
     }
    }
  }
</script>
