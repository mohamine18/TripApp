<template>
  <div class="hidden-md-and-up ">
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/">
          <v-icon >fas fa-times</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >All Bookings</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-container>
    <!--recipes of Trips-->
    <v-container
        fluid
        grid-list-lg
      >
      <v-layout row wrap>
        <v-subheader>All attended Trips</v-subheader>
          <v-flex xs12 v-for="(trip,i) in trips" :key="i">
          <v-card :color="trip.color" class="white--text" flat>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <span class="body-2">{{ trip.tripname }}</span><br>
                    <span class="body-2">{{ trip.tripdate }}</span><br>
                    <span class="body-2">{{ trip.tripstatu }}</span>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    :src="trip.img"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    trips:[
      {tripname: 'Beijing Great Wall', tripdate: '2017-02-10', tripstatu:'UpComing', color:'info ',
      img:'https://www.apec.org/-/media/Images/NewsRelease/2017/0620_Tourism.jpg'},
      {tripname: 'Beijing Potinical Garden', tripdate: '2017-02-11', tripstatu:'Cancled', color:'accent ',
      img:'http://www.travelnewsdigest.in/wp-content/uploads/2013/01/hurghada.jpg' },
      {tripname: 'Beijing Summer Palace', tripdate: '2017-02-12', tripstatu:'Booked', color:'success ',
      img:'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2017/05/12/16/cinq-terre.jpg' },
      {tripname: 'Tianjin Eye', tripdate: '2017-02-13', tripstatu:'Refunded', color:'error ',
      img:'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/02/22/09/paris.jpg' },
      {tripname: 'Xian Carottes', tripdate: '2017-02-14', tripstatu:'UpComing', color:'info ',
      img:'https://kerala.me/wp-content/uploads/2015/11/Tourism.jpg' }
    ]
  })
}
</script>
