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
  <v-layout row  fill-height>
    <v-flex xs12>
      <v-card>
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
              <v-list-tile-title>Date & Time</v-list-tile-title>
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
  <v-layout column d-block>
    <v-btn  fixed bottom  right color="accent" dark @click.native="sheet =! sheet">Book this Trip</v-btn>
  </v-layout>

    <!--register dialog-->
    <v-dialog v-model="sheet" fullscreen transition="dialog-bottom-transition" >
       <v-card flat>
       <v-container>
        <v-toolbar dark color="accent" dense fixed>
          <v-toolbar-title>Register</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="reset" dark>
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        </v-container>
        <v-card >
          <v-card-media
          height="250px"
          src="https://justhistoryposts.files.wordpress.com/2017/07/great-wall-of-china-fact.jpg?w=816"
          >
          </v-card-media>
        </v-card>
         <v-stepper v-model="dialogswitcher" vertical flat>
              <!--Select Hikers-->
              <v-stepper-step color="accent" step="1" :complete="dialogswitcher > 1" editable>
                Select Hikers
                <small>Select Hikers joining {{ tripname }}</small>
              </v-stepper-step>
              <v-stepper-content step="1">
                <v-card class="mb-3" >
                  <v-select
                    label="Add"
                    :items="peopleitems"
                    v-model="people"
                    multiple
                    prepend-icon="far fa-plus-square"
                    max-height="400"
                    color="accent"
                    solo
                  ></v-select>
                </v-card>
                <v-btn color="accent" @click.native="dialogswitcher = 2">Continue</v-btn>
              </v-stepper-content>
              <!--Pomotional Code-->
              <v-stepper-step color="accent" step="2" :complete="dialogswitcher > 2" editable>
                Enter Pomotional Code
                <small>Share the trip and get a code</small>
              </v-stepper-step>
              <v-stepper-content step="2">
                <v-card class="mb-3">
                  <v-text-field solo label="Promotional Code" v-model="promocode" color="accent"></v-text-field>
                </v-card>
                <v-btn color="accent" @click.native="dialogswitcher = 3">Continue</v-btn>
                <v-btn flat @click.native="cheked =! cheked" outline color="accent">Chek code
                <v-icon right dark color="success" v-if ="cheked">fas fa-check-circle</v-icon>
                </v-btn>
              </v-stepper-content>
              <!--Rules and terms-->
              <v-stepper-step color="accent" step="3" :complete="dialogswitcher > 3" >Trip Rule Terms</v-stepper-step>
              <v-stepper-content step="3">
                <div class="destext">
                  <p>{{ terms }}</p>
                </div>
                 <v-checkbox label="Agree with this Disclaimer" v-model="checkbox" ></v-checkbox>
                <v-btn color="accent" @click.native="pricecalculator" v-show="checkbox==true">Continue</v-btn>
              </v-stepper-content>
              <!--Checkout-->
              <v-stepper-step color="accent" step="4" >Checkout</v-stepper-step>
              <v-stepper-content step="4">
                <v-card color="grey lighten-1" class="mb-3" height="200px"></v-card>
                <v-btn color="success" block @click.native="">Checkout</v-btn>      
              </v-stepper-content>
            </v-stepper>
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
      dialogswitcher: 1,
      sheet: false,
      tripname: 'Beijing Great Wall',
      tripagent: 'SeeYou',
      triptemperature: '15',
      tripcondition: 'Tropical storm',
      tripconditioncode: '1',
      tripdate: 'Sat, March 31, 2018',
      triptime: '8:00 am - 6:00 pm BT',
      tripprice: '222',
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

</style>
