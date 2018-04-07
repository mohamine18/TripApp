<template>
            <v-container  grid-list-lg color ="cray" >
            <!--Trip List-->
            <v-layout row wrap >
              <v-flex xs12 md6 lg4 v-for="card in cards" :key="card.title">
                <v-card class="elevation-1" flat to="/Trip-Details">
                  <v-card-media
                    :src="card.src"
                    height="150px"
                  >
                     <v-layout column class="media">
                      <v-card-title>
                        <v-spacer></v-spacer>
                        <v-avatar class="primary" tile >
                          <span class="white--text" v-text="card.date"></span>
                        </v-avatar>
                      </v-card-title>
                     </v-layout>
                  </v-card-media >
                </v-card>
                <v-card>
                  <v-card-media height="65px">
                    <v-card-title >
                      <div >
                        <span class="title" v-text="card.title"></span><br>
                        <span class="grey--body-1" v-text="card.time"></span> &nbsp;
                        <span class="grey--body-1" v-text="card.location"></span>
                      </div>
                    </v-card-title>
                  </v-card-media>
                </v-card>
                <v-card>
                  <v-card-actions >
                    <div >
                      <span class="grey--body-1" >&num;{{ card.cat }}</span>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn  icon class="primary--text"
                      @click="card.fav = !card.fav"
                      >
                      <v-icon v-if="card.fav == false" >far fa-heart</v-icon>
                      <v-icon v-else >fas fa-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="primary">fas fa-share-alt</v-icon>
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
        images:[
          {src:"http://www.ucb.ac.uk/content/images/courses/hospitality-tourism-events/events-management-3.jpg"},
          {src:"http://lifemstyle.com/wp-content/uploads/2015/05/Brink-Events-02.jpg"},
          {src:"http://www.sport-egger.com/media/mod_jmslideshow/1300x600_fit_Bike-und-Mountainbike-im-Gasteinertal,-Egger-Sport-in-Dorfgastein2.jpg"}
        ],
        cards: [
          {
            title: "Pre-fab homes",
            src:
              "http://www.openskydeals.com/wp-content/uploads/2015/04/499-punta-cana-all-inclusive-trip-wair-save-430.jpg",
            date: "15 MAY",
            time: "TUE, 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
            bookmark: false
          },
          {
            title: "Favorite road trips",
            src:
              "https://captainsmanorinn.com/wp-content/uploads/2013/01/sandwhich-300x100.jpg",
            date: "15 MAY",
            time: "TUE, 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
            bookmark: false
          },
          {
            title: "Best airlines",
            src:
              "https://www.korindotravel.com/wp-content/uploads/2017/03/west-borneo-trip-300x100.gif",
            date: "15 MAY",
            time: "TUE, 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
            bookmark: false
          },
          {
            title: "Pre-fab homes1",
            src:
              "https://s-media-cache-ak0.pinimg.com/originals/c6/b4/02/c6b402ea6d8c6daf8b23ff3b37ed56db.jpg",
            date: "15 MAY",
            time: "TUE, 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
            bookmark: false
          },
          {
            title: "Favorite road trips1",
            src:
              "https://www.uniquejungletours.com/wp-content/uploads/2017/05/3-Days-Trip-tanzania-300x100.jpg",
            date: "15 MAY",
            time: "TUE, 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
            bookmark: false
          },
          {
            title: "Best airlines1",
            src:
              "https://captainsmanorinn.com/wp-content/uploads/2013/01/daytripstop-300x100.jpg",
            date: "15 MAY",
            time: "TUE, 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
            bookmark: false
          }
        ],
      }
    }
  }
</script>

<style scoped>
  .bordercard {
    border: 2px solid red;
  }
</style>
