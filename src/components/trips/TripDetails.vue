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
                  <v-flex xs9>
                    <span class="headline"><b>{{ item.tripname }}</b></span><br>
                    <span class="grey--text">By {{ item.tripagent }}</span>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs2 >
                    <v-btn flat icon :to="{ name: 'TripPictures', params:{tripname:item.tripname , tripid: item.tripid}}">
                      <v-icon medium color="primary ">photo_library</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>

              <v-divider></v-divider>
              <v-list two-line subheader>
              <!--trip forcast-->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >wi-yahoo-{{ conditioncode }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Trip Weather {{weathercond()}}</v-list-tile-title>
                  <v-list-tile-sub-title></v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ condition.charAt(0).toUpperCase() + condition.slice(1) }} ( {{ temp }} C&deg; )</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <!--trip date and time -->
              <v-list-tile avatar>
                <v-list-tile-action>
                  <v-icon >date_range</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Date &amp; Time</v-list-tile-title>
                  <v-list-tile-sub-title>{{ getDatetrip(item.tripSdate,item.tripFdate) }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ getTimetrip(item.tripSdate,item.tripFdate) }}</v-list-tile-sub-title>
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
                  <v-list-tile-sub-title>{{ item.tripprice[0].price }} &yen;</v-list-tile-sub-title>
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
                      :value="gender(item.tripNowcus,item.tripMaxcus)"
                      color="accent"
                    >
                      <b class="caption">{{item.tripNowcus}} / {{item.tripMaxcus}}</b>
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
                      :value="gender(item.tripMalecus,item.tripNowcus)"
                      color="primary"
                    >
                      <b class="caption">{{ item.tripMalecus }} / {{ item.tripNowcus }}</b>
                    </v-progress-circular>
                    <v-card-text>Male</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs4>
                  <v-card flat >
                    <v-progress-circular
                      :size="80"
                      :width="9"
                      :rotate="360"
                      :value="gender(item.tripFemalecus,item.tripNowcus)"
                      color="primary"
                    >
                      <b class="caption">{{ item.tripFemalecus }} / {{ item.tripNowcus }}</b>
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

      <v-btn :to="{name:'Checkout', params: { tripname: this.$route.params.tripname, tripid: this.$route.params.tripid}}" >
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
      condition: 'hot',
      conditioncode: '36',
      temp: '42',
      tripdetails:[
        {
          tripid: this.$route.params.tripid,
          tripname:this.$route.params.tripname,
          picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527494647753&di=21756f38e74554d1bd87e6056b0bc2ba&imgtype=0&src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F01%2Fbf%2F6e%2F46%2Fcaption.jpg',
          tripagent: 'SeeYou',
          tripSdate: '2018-07-09T00:00:00.000Z',
          tripFdate: '2018-07-11T12:00:00.000Z',
          tripprice: [{type:'sprout',price:'222'},{type:'blossom',price:'212'},{type:'flower',price:'207'}],
          triplocation:'Beijing Haidian district, china',
          tripMaxcus: '50',
          tripNowcus: '31',
          tripMalecus: '19',
          tripFemalecus: '12',
          tripdef: 'The Hong Kong Stock Exchange has proposed the biggest overhaul of its IPO listing rules in over twenty years, including allowing dual class-listing and favorable listing terms for biotech companies. These changes are expected to make the HKEX the most attractive overseas listing option for mainland Chinese firms, and potentially help Hong Kong reclaim its leading position on the global IPO league table. At the same time, after a record 437 IPOs in mainland China, raising a total of RMB45 billion last year, the outlook for domestic IPOs by Chinese companies is increasingly uncertain as the regulatory approval process becomes more strenuous. That should spark greater interests by Chinese companies, especially those in biotech sector, to seek a public share float in the neighboring Special Administrative Region, Hong Kong.',
        }
      ],
      male: 30,
      male1: 0,
      female: 30,
      female1: 0,
    }
  },
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
    },
    getTimetrip(datestr1,datestr2){
      var date1 = new Date(datestr1);
      var date2 = new Date(datestr2);
      var daylong1 = date1.toLocaleDateString("en-US", { weekday: 'long'});
      var hourNum1 = date1.getHours();
      var minNum1 = date1.getMinutes()<10?'0':'';
      var daylong2 = date2.toLocaleDateString("en-US", { weekday: 'long'});
      var hourNum2 = date2.getHours();
      var minNum2 = date2.getMinutes()<10?'0':'';
      if (daylong1 == daylong2) {
        var dayHour = daylong1+', '+ hourNum1+':'+minNum1+ date1.getMinutes()+' - '+hourNum2+':'+minNum2+ date2.getMinutes();
        return dayHour
      } else {
        var dayHour = daylong1+', '+ hourNum1+':'+minNum1+ date1.getMinutes()+' to '+daylong2+', '+ hourNum2+':'+minNum2+ date2.getMinutes();
        return dayHour
      }
    },
    gender(value,total){
      var gender = (value*100)/total
      return gender
    },
    weathercond(){
      var queryURL = "https://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text='chicago, il')&format=json&callback=callbackFunction";
      this.$http.get(queryURL, function (data) {
        var results = data.query.results
        var firstResult = results.channel.item.condition
        console.log(firstResult);
        console.log(result);

        var location = 'beijing' // not returned in response
        var temp = firstResult.temp
        var text = firstResult.text

        console.log('The temperature is ' + temp + '. Forecast calls for '+text);

      });
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
