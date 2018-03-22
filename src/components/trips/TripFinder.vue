<template>
            <!--Search bar-->
            <v-container grid-list-lg>
            <v-layout row wrap >
              <v-flex  xs12 sm12 lg12 class="text-xs-center text-sm-center ">
                <div class="title" >Find A Trip In</div>
              </v-flex>

              <!--Select Location-->
              <v-flex xs12 sm12 lg4 class="text-xs-center">
                <v-select
                  v-model="select"
                  label="Select Location"
                  chips
                  :items="items"
                  single-line
                  solo
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      @input="data.parent.selectItem(data.item)"
                      class="chip--select-multi"
                      :selected="data.selected"
                      :disabled="data.disabled"
                      :key="JSON.stringify(data.item)"
                      
                    >
                      <v-avatar class="secondary" dark>
                        <v-icon>my_location</v-icon>
                      </v-avatar>
                      {{ data.item }}
                    </v-chip>
                  </template>
                </v-select>
              </v-flex>
              
              <!--Select category-->
              <v-flex xs12 sm12 lg4 class="text-xs-center">
                <v-select
                  v-model="selectcategory"
                  label="Select Category"
                  chips
                  :items="category"
                  single-line
                  solo
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      @input="data.parent.selectItem(data.item)"
                      class="chip--select-multi"
                      :selected="data.selected"
                      :disabled="data.disabled"
                      :key="JSON.stringify(data.item)"
                      
                    >
                      <v-avatar class="secondary" dark>
                        <v-icon>my_location</v-icon>
                      </v-avatar>
                      {{ data.item }}
                    </v-chip>
                  </template>
                </v-select>
              </v-flex>
              <!--Select dates-->
              <v-flex xs12 sm12 lg4 class="text-xs-center">
                <v-select
                  v-model="selectdate"
                  label="Select Date"
                  chips
                  :items="dates"
                  single-line
                  solo
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      @input="data.parent.selectItem(data.item)"
                      class="chip--select-multi"
                      :selected="data.selected"
                      :disabled="data.disabled"
                      :key="JSON.stringify(data.item)"
                      
                    >
                      <v-avatar class="secondary" dark>
                        <v-icon>today</v-icon>
                      </v-avatar>
                      {{ data.item }}
                    </v-chip>
                  </template>
                </v-select>
              </v-flex>
            </v-layout>

            <!--Trip List-->
            <v-layout row wrap >
              <v-flex xs12 md6 lg4 v-for="card in cards" :key="card.title">
                <v-card class="elevation-1" flat >
                  <v-card-media
                    :src="card.src"
                    height="150px"
                  >
                  
                  </v-card-media>
                    <v-card-media height="120px">
                      <v-card-title>
                        <div>
                           <v-icon small>watch</v-icon>
                          <span class="grey--text" v-text="card.date"></span><br>
                          <span class="headline" v-text="card.title"></span><br>
                          <span class="subheading" v-text="card.def"></span><br>
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
                    <v-btn icon>
                      <v-icon color="primary">share</v-icon>
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
      select: [],
      items: [
        'All Locations',
        'Beijing',
        'Guangzhou',
        'Shanghai',
        'Hangzhou'
        ],
      selectdate: [],
      dates: [
        'All Dates',
        'Today',
        'Tomorrow',
        'This Week',
        'This Weekend',
        'Next Week',
        'Next Month'
        ],
        selectcategory: [],
        category: [
          'All categories',
          'One day Trip',
          'Two days Trip',
          'Long Trips',
          'Free Trip'
          ],
       cards: [
          {
            title: "Pre-fab homes",
            src:
              "http://www.openskydeals.com/wp-content/uploads/2015/04/499-punta-cana-all-inclusive-trip-wair-save-430.jpg",
            date: "TUE, MAY 15 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            bookmark: false
          },
          {
            title: "Favorite road trips",
            src:
              "https://captainsmanorinn.com/wp-content/uploads/2013/01/sandwhich-300x100.jpg",
            date: "TUE, MAY 15 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            bookmark: false
          },
          {
            title: "Best airlines",
            src:
              "https://www.korindotravel.com/wp-content/uploads/2017/03/west-borneo-trip-300x100.gif",
            date: "TUE, MAY 15 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            bookmark: false
          },
          {
            title: "Pre-fab homes1",
            src:
              "https://s-media-cache-ak0.pinimg.com/originals/c6/b4/02/c6b402ea6d8c6daf8b23ff3b37ed56db.jpg",
            date: "TUE, MAY 15 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            bookmark: false
          },
          {
            title: "Favorite road trips1",
            src:
              "https://www.uniquejungletours.com/wp-content/uploads/2017/05/3-Days-Trip-tanzania-300x100.jpg",
            date: "TUE, MAY 15 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            bookmark: false
          },
          {
            title: "Best airlines1",
            src:
              "https://captainsmanorinn.com/wp-content/uploads/2013/01/daytripstop-300x100.jpg",
            date: "TUE, MAY 15 9:00 AM",
            def: "Event description from the organizer",
            location: "USTB, Beijing China",
            fav: false,
            bookmark: false
          }
        ],
      }
    }
  }
</script>