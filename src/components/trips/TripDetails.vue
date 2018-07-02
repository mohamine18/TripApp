<template>
<div >


      <v-layout row fill-height>
        <v-flex xs12 v-for="(item,i) in tripdetails" :key="i">
          <v-card flat>
            <v-card-media
              height="250px"
              :src="item.picurl"
            >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <v-btn icon color="primary" :to="{ name: 'Home'}">
                    <v-icon  >keyboard_arrow_left</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>

            </v-card-media>
            <!--trip name and agent-->
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-left >
                    <span class="headline"><b>{{ $route.params.tripname }}</b></span><br>
                    <span class="grey--text">By {{ item.tripagent }}</span>
                  </v-flex>
                </v-layout>
              </v-container>

              <v-divider></v-divider>
              <v-list two-line subheader>
              <!--trip forcast-->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >wi-yahoo-{{ item.tripconditioncode }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.tripcondition }}</v-list-tile-title>
                  <v-list-tile-sub-title>Temperature {{ item.triptemperature }} C&deg;</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!--trip date and time -->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >date_range</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Date &amp; Time</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.tripdate }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.triptime }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!--trip location-->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >place</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Location</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.triplocation }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!--trip price-->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >loyalty</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Trip Cost</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.tripprice }} &yen;</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-container fill-height grid-list-xl text-xs-center>
              <v-layout  row wrap>
                <v-flex xs12>
                  <h3>Who is attending this Trip ?</h3>
                </v-flex>
                <v-flex xs4>
                  <v-card flat >
                    <v-progress-circular
                      :size="80"
                      :width="9"
                      :rotate="360"
                      :value="100"
                      color="accent"
                    >
                      <b>{{ total }}</b>
                    </v-progress-circular>
                    <v-card-text>Total</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card flat >
                    <v-progress-circular
                      :size="80"
                      :width="9"
                      :rotate="360"
                      :value="male1"
                      color="primary"
                    >
                      <b>{{ male }}</b>
                    </v-progress-circular>
                    <v-card-text>male</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card flat >
                    <v-progress-circular
                      :size="80"
                      :width="9"
                      :rotate="360"
                      :value="female1"
                      color="primary"
                    >
                      <b>{{ female }}</b>
                    </v-progress-circular>
                    <v-card-text>Female</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
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
              <span>{{ item.tripdef }}</span>
            </div>
            </v-card>
        </v-flex>
      </v-layout>

      <v-btn :to="{name:'Checkout', params: { tripname: name}}" >
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
      name: this.$route.params.tripname,
      tripdetails:[
        {
          picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527494647753&di=21756f38e74554d1bd87e6056b0bc2ba&imgtype=0&src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F01%2Fbf%2F6e%2F46%2Fcaption.jpg',
          tripagent: 'SeeYou',
          triptemperature: '15',
          tripcondition: 'Tropical storm',
          tripconditioncode: '20',
          tripdate: 'Sat, March 31, 2018',
          triptime: '8:00 am - 6:00 pm BT',
          tripprice: '212',
          triplocation:'Beijing Haidian district, china',
          tripdef: 'The Hong Kong Stock Exchange has proposed the biggest overhaul of its IPO listing rules in over twenty years, including allowing dual class-listing and favorable listing terms for biotech companies. These changes are expected to make the HKEX the most attractive overseas listing option for mainland Chinese firms, and potentially help Hong Kong reclaim its leading position on the global IPO league table. At the same time, after a record 437 IPOs in mainland China, raising a total of RMB45 billion last year, the outlook for domestic IPOs by Chinese companies is increasingly uncertain as the regulatory approval process becomes more strenuous. That should spark greater interests by Chinese companies, especially those in biotech sector, to seek a public share float in the neighboring Special Administrative Region, Hong Kong.',
        }
      ],
      total: 60,
      male: 30,
      male1: 0,
      female: 30,
      female1: 0,
    }
  },
  created() {
    //do something after creating vue instance
    this.male1 = (this.male*100)/this.total;
    this.female1 = (this.female*100)/this.total;

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
