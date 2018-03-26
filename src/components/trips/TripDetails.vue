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
  <v-layout column xs12 fill-height
>
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
          <!--trip forcast-->
          <v-container fill-height fluid>
            <v-layout justify-space-around fluid column>
              <v-flex xs12>
                <v-icon medium > info_outline </v-icon>
                <span class="title">Trip Forecast</span>
              </v-flex>
              <v-flex xs12>
                <span class="group pa-1">
                  <v-icon >wi-yahoo-32</v-icon>
                  <v-icon>wi-yahoo-35</v-icon>
                  <v-icon>wi-yahoo-46</v-icon>
                </span>
              </v-flex>
            </v-layout>
          </v-container>

          <!--trip date and time -->
           <v-container fill-height fluid>
            <v-layout fill-height column>
              <v-flex>
                <v-icon medium > date_range </v-icon>
                <span class="title">Date & Time</span>
              </v-flex>
              <v-flex xs12 >
                <span class="body-2">{{ tripdate }}</span><br>
                <span class="body-2">{{ triptime }}</span>
              </v-flex>
            </v-layout>
          </v-container>
          <!--trip location-->
           <v-container fill-height fluid>
            <v-layout fill-height column>
              <v-flex>
                <v-icon medium > place </v-icon>
                <span class="title">Location</span>
              </v-flex>
              <v-flex xs12 >
                <span class="body-2">{{ triplocation }}</span>
              </v-flex>
            </v-layout>
          </v-container>
         <!--trip Description-->
           <v-container fill-height fluid>
            <v-layout fill-height column>
              <v-flex>
                <v-icon medium > chrome_reader_mode </v-icon>
                <span class="title">Description</span>
              </v-flex>
              <v-flex xs12 >
                <span class="body-2">{{ tripdef }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout column d-block>
            <v-btn  fixed bottom right color="success" dark>Book this Trip</v-btn>
  </v-layout>

</div>
</template>

<script>
export default {
  data () {
    return {
      tripname: 'Beijing Greatwall',
      tripagent: 'SeeYou',
      tripdate: 'Sat, March 31, 2018',
      triptime: '8:00 am - 6:00 pm BT',
      triplocation:'Beijing chanping district, china',
      tripdef: 'The Hong Kong Stock Exchange has proposed the biggest overhaul of its IPO listing rules in over twenty years, including allowing dual class-listing and favorable listing terms for biotech companies. These changes are expected to make the HKEX the most attractive overseas listing option for mainland Chinese firms, and potentially help Hong Kong reclaim its leading position on the global IPO league table. At the same time, after a record 437 IPOs in mainland China, raising a total of RMB45 billion last year, the outlook for domestic IPOs by Chinese companies is increasingly uncertain as the regulatory approval process becomes more strenuous. That should spark greater interests by Chinese companies, especially those in biotech sector, to seek a public share float in the neighboring Special Administrative Region, Hong Kong.'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .group
    display: flex
    flex: 1
    justify-content: space-around
</style>