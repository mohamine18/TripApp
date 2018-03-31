<template>
<div class="hidden-md-and-up">
    <v-container >
        <v-toolbar color="primary" dark dense fixed  flat class="hidden-md-and-up">
          <v-btn icon to="/">
              <v-icon >chevron_left</v-icon>
          </v-btn>
          <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
            <span >Trip information</span>
          </v-toolbar-title>
        </v-toolbar>
    </v-container>

      <v-layout row fill-height>
        <v-flex xs12>
          <v-card flat>
            <v-card-media
              height="250px"
              src="https://justhistoryposts.files.wordpress.com/2017/07/great-wall-of-china-fact.jpg?w=816"
            >

            </v-card-media>
            <!--trip name and agent-->
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-left >
                    <span class="headline"><b>{{ tripname }}</b></span><br>
                    <span class="grey--text">By {{ tripagent }}</span>
                  </v-flex>
                </v-layout>
              </v-container>

              <v-divider></v-divider>
              <v-list two-line subheader>
              <!--trip forcast-->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >wi-yahoo-{{ tripconditioncode }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ tripcondition }}</v-list-tile-title>
                  <v-list-tile-sub-title>Temperature {{ triptemperature }} C&deg;</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!--trip date and time -->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >date_range</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Date &amp; Time</v-list-tile-title>
                  <v-list-tile-sub-title>{{ tripdate }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ triptime }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!--trip location-->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >place</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Location</v-list-tile-title>
                  <v-list-tile-sub-title>{{ triplocation }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!--trip price-->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >fas fa-yen-sign</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Trip Cost</v-list-tile-title>
                  <v-list-tile-sub-title>{{ tripprice }} &yen;</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <!--trip Description-->
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >fas fa-file-alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title >Description</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <div class="destext">
              <span>{{ tripdef }}</span>
            </div>
            </v-card>
        </v-flex>
      </v-layout>

      <button v-on:click="sheet =! sheet" >
        <div id="fixedbutton">
            <v-btn block color="success" depressed >Book this Trip</v-btn>
        </div>
      </button>



    <v-dialog v-model="sheet" persistent max-width="290">
      <v-card>
        <v-card-title class="body-2">How many friends will join you ?</v-card-title>
        <v-divider></v-divider>
          <div class="text-xs-center pt-2 pb-2">
            <v-btn fab dark small color="success" @click.native="hikersminus" >
              <v-icon dark>fas fa-minus</v-icon>
            </v-btn>
            <v-btn outline color="success"  flat depressed>{{ hikers }}</v-btn>
            <v-btn fab dark small color="success" @click.native="hikers++">
              <v-icon dark>fas fa-plus</v-icon>
            </v-btn>
          </div>
        <v-divider></v-divider>
        <v-card-actions class="">
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" flat small @click.native="sheet = false">cancel</v-btn>
          <v-btn color="success" depressed dark small @click.native="sheet = false" to="/checkout">Checkout</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</div>
</template>

<script>
export default {
  data () {
    return {
      checkbox: false,
      promocode: '',
      cheked: false,
      people: ['Bouras Amine'],
      peopleitems: [ 'Bouras Amine', 'Xu Yue', 'Vivian', 'Ning Laoshi', 'Sahraoui'],
      hikers: 1,
      sheet: false,
      tripname: 'Beijing Great Wall',
      tripagent: 'SeeYou',
      triptemperature: '15',
      tripcondition: 'Tropical storm',
      tripconditioncode: '1',
      tripdate: 'Sat, March 31, 2018',
      triptime: '8:00 am - 6:00 pm BT',
      tripprice: '212',
      tripqty: 0,
      triptp: 0,
      tripda: 0,
      tripfp:0,
      tripdiscount:'5',
      triplocation:'Beijing Haidian district, china',
      tripdef: 'The Hong Kong Stock Exchange has proposed the biggest overhaul of its IPO listing rules in over twenty years, including allowing dual class-listing and favorable listing terms for biotech companies. These changes are expected to make the HKEX the most attractive overseas listing option for mainland Chinese firms, and potentially help Hong Kong reclaim its leading position on the global IPO league table. At the same time, after a record 437 IPOs in mainland China, raising a total of RMB45 billion last year, the outlook for domestic IPOs by Chinese companies is increasingly uncertain as the regulatory approval process becomes more strenuous. That should spark greater interests by Chinese companies, especially those in biotech sector, to seek a public share float in the neighboring Special Administrative Region, Hong Kong.',
      enddate: 'May 15',
      terms: '1) Refund princepal: No refund within 24h of departure time. Minimum 20 participants to confirm this trip, otherwise trip leader will refund you. 2) If you are late to the meeting point, we are sorry but we wont wait for you, because this is collective activity. So no refund in this case. 3) For one-day trips, no refund 24 hours before the trip, because we have already booked the bus and leave the seat for you. 4) We wont bear any responsability if - you get injured because you didnt follow our guides instructions. - you get injured because you lied about your illness (heart disease, asthma etc...), which directly resulted to your injuries during the trip. - you fight with others. 5) One should be fully aware of the unpredictabilities that outdoor activities may have.'
    }
  },
  methods: {
    reset: function (event) {
      if (event){
        this.sheet = false;
        this.cheked = false;
        this.checkbox = false;
        this.people= ['Bouras Amine'];
        this.promocode = '';
        this.dialogswitcher= 1
      }
    },
    pricecalculator: function () {
      this.dialogswitcher = 4;
      var totalpeople = this.people.length ;
      var price = this.people.length * parseInt(this.tripprice) ;
      var pricediscount = totalpeople * parseInt(this.tripprice) - parseInt(this.tripdiscount);
      this.tripqty= totalpeople ;
      this.triptp= price ;
      this.tripda= this.tripdiscount ;
      this.tripfp= pricediscount ;
    },
    hikersminus: function () {
      if (this.hikers > 1 ) {
        this.hikers = this.hikers -1;
      }else {
        this.hikers = 1;
      }
    }
  }
}
</script>

<style scoped>
.destext {
    margin-left:20px;
    margin-right:20px;
    padding-bottom:20px;
}
.spantext{
  text-align: right;
}
#fixedbutton {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 6px;
    padding-top: 6px;
    width: 100%;
    background-color:white;
}

</style>
