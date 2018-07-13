<template>
  <div >
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon :to="{name: 'Profile'}">
          <v-icon >close</v-icon>
        </v-btn>
        <v-toolbar-title  class="ml-0 pl-3" d-block>
          <span >All Bookings</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-container>
    <!--recipes of Trips-->
    <v-container fluid grid-list-lg class="pt-4" >
      <v-layout row wrap >
          <v-flex xs12 v-for="(trip,i) in trips" :key="i">
          <v-card  flat class="borderleft" v-bind:style="{ 'border-left-color': trip.color }" >
            <v-container fluid grid-list-lg >
              <v-layout row>
                <v-flex xs7 class="pb-0 pt-0">
                  <div>
                    <span class="body-2"><b>{{ trip.tripname }}</b></span><br>
                    <span class="caption">{{ getDatetrip(trip.tripSdate,trip.tripFdate) }}</span> <br>
                    <span class="caption">QTY: {{ trip.qty }}</span> <br>
                    <span class="caption">Amount: {{ trip.amount }}</span> <br>
                    <span class="body-2" v-bind:style="{ 'color': trip.color }"><b>{{ trip.tripstatu }}</b></span>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    :src="trip.img"
                    height="80px"
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
      {
        tripid: '01258232165',
        tripname: 'Beijing Potinical Garden',
        tripSdate: '2018-07-14T00:00:00.000Z',
        tripFdate: '2018-07-15T12:00:00.000Z',
        amount: '475',
        qty: '3',
        tripstatu:'Canceled',
        color:'#FFA726',
        img:'http://www.travelnewsdigest.in/wp-content/uploads/2013/01/hurghada.jpg'
      },
      {
        tripid: '01258232165',
        tripname: 'Beijing Summer Palace',
        tripSdate: '2018-07-14T00:00:00.000Z',
        tripFdate: '2018-07-14T12:00:00.000Z',
        amount: '475',
        qty: '3',
        tripstatu:'Booked',
        color:'#4CAF50',
        img:'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2017/05/12/16/cinq-terre.jpg'
      },
      {
        tripid: '01258232165',
        tripname: 'Tianjin Eye',
        tripSdate: '2018-07-20T00:00:00.000Z',
        tripFdate: '2018-07-23T12:00:00.000Z',
        amount: '475',
        qty: '3',
        tripstatu:'Refunded',
        color:'#FF5252',
        img:'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/02/22/09/paris.jpg'
      }
    ]
  }),
  methods: {
    getDatetrip(datestr1,datestr2){
      var date1 = new Date(datestr1);
      var date2 = new Date(datestr2);
      var yearlong1 = date1.toLocaleDateString("en-US", { year: 'numeric'});
      var monthlong1 = date1.toLocaleDateString("en-US", { month: 'long'});
      var daynum1 = date1.toLocaleDateString("en-US", { day: 'numeric'});
      var yearlong2 = date2.toLocaleDateString("en-US", { year: 'numeric'});
      var monthlong2 = date2.toLocaleDateString("en-US", { month: 'long'});
      var daynum2 = date2.toLocaleDateString("en-US", { day: 'numeric'});
      if (daynum1 == daynum2 && monthlong1==monthlong2) {
        var datetrip = monthlong1+' '+daynum1+', '+yearlong1;
        return datetrip
      }else {
        var datetrip = monthlong1+' '+daynum1+' - '+monthlong2+' '+daynum2+', '+yearlong2;
        return datetrip
      }
    }
  }
}
</script>
<style scoped>
.borderleft{
  border-left: 4px solid;
  border-right: 1px solid  #BDBDBD;
  border-bottom: 1px solid  #BDBDBD;
  border-top: 1px solid  #BDBDBD;
  border-radius: 5px;
}
</style>
