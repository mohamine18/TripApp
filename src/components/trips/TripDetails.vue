<template>
<div class="hidden-md-and-up">
    <v-container >
        <v-toolbar color="primary" dark dense fixed  flat class="hidden-md-and-up">
          <v-btn icon to="/">
              <v-icon >chevron_left</v-icon>
          </v-btn>
          <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
            <span > {{ title }} </span>
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
                    <span class="headline"><b>{{ $route.params.tripname }}</b></span><br>
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
                  <v-icon >loyalty</v-icon>
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
                  <v-icon >chrome_reader_mode</v-icon>
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

      <v-btn to="/checkout" >
        <div id="fixedbutton">
            <v-btn block color="success" depressed >Book this Trip</v-btn>
        </div>
      </v-btn>


</div>
</template>

<script>

export default {
  data () {
    return {
      title: 'Trip information',
      people: ['Bouras Amine'],
      peopleitems: [ 'Bouras Amine', 'Xu Yue', 'Vivian', 'Ning Laoshi', 'Sahraoui'],
      tripname: 'Beijing Great Wall',
      tripagent: 'SeeYou',
      triptemperature: '15',
      tripcondition: 'Tropical storm',
      tripconditioncode: '1',
      tripdate: 'Sat, March 31, 2018',
      triptime: '8:00 am - 6:00 pm BT',
      tripprice: '212',
      triplocation:'Beijing Haidian district, china',
      tripdef: 'The Hong Kong Stock Exchange has proposed the biggest overhaul of its IPO listing rules in over twenty years, including allowing dual class-listing and favorable listing terms for biotech companies. These changes are expected to make the HKEX the most attractive overseas listing option for mainland Chinese firms, and potentially help Hong Kong reclaim its leading position on the global IPO league table. At the same time, after a record 437 IPOs in mainland China, raising a total of RMB45 billion last year, the outlook for domestic IPOs by Chinese companies is increasingly uncertain as the regulatory approval process becomes more strenuous. That should spark greater interests by Chinese companies, especially those in biotech sector, to seek a public share float in the neighboring Special Administrative Region, Hong Kong.',
      enddate: 'May 15'
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
