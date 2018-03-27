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

    <v-dialog v-model="sheet" fullscreen transition="dialog-bottom-transition" >
      <v-card>
        <v-toolbar dark color="accent" dense>
          <v-toolbar-title>Register</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="sheet = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
       
         <v-stepper v-model="e6" vertical>
              <v-stepper-step color="accent" step="1" :complete="e6 > 1">
                Select an app
                <small>Summarize if needed</small>
              </v-stepper-step>
              <v-stepper-content step="1">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="accent" @click.native="e6 = 2">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
              <v-stepper-step step="2" :complete="e6 > 2">Configure analytics for this app</v-stepper-step>
              <v-stepper-content step="2">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="accent" @click.native="e6 = 3">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
              <v-stepper-step step="3" :complete="e6 > 3">Select an ad format and name ad unit</v-stepper-step>
              <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="accent" @click.native="e6 = 4">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
              <v-stepper-step step="4">View setup instructions</v-stepper-step>
              <v-stepper-content step="4">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="accent" @click.native="e6 = 1">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
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
      e6: 1,
      sheet: false,
      tripname: 'Beijing Great Wall',
      tripagent: 'SeeYou',
      triptemperature: '15',
      tripcondition: 'Tropical storm',
      tripconditioncode: '1',
      tripdate: 'Sat, March 31, 2018',
      triptime: '8:00 am - 6:00 pm BT',
      triplocation:'Beijing Haidian district, china',
      tripdef: 'The Hong Kong Stock Exchange has proposed the biggest overhaul of its IPO listing rules in over twenty years, including allowing dual class-listing and favorable listing terms for biotech companies. These changes are expected to make the HKEX the most attractive overseas listing option for mainland Chinese firms, and potentially help Hong Kong reclaim its leading position on the global IPO league table. At the same time, after a record 437 IPOs in mainland China, raising a total of RMB45 billion last year, the outlook for domestic IPOs by Chinese companies is increasingly uncertain as the regulatory approval process becomes more strenuous. That should spark greater interests by Chinese companies, especially those in biotech sector, to seek a public share float in the neighboring Special Administrative Region, Hong Kong.',
      enddate: 'May 15',
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
