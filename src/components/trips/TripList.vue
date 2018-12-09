<template>
            <v-container  grid-list-md color ="cray">
            <!--Trip List-->
            <v-layout row wrap >
              <v-flex xs12 sm6 md6 lg4 v-for="(card,index) in cards" :key="card.title">
                <v-card class="elevation-1" flat  :to="{name:'TripDetails', params:{tripname:card.title, tripid: card.id}}">
                  <v-card-media
                    :src="card.src"
                    height="150px"
                  >
                     <v-layout column class="media">
                      <v-card-title>
                        <v-spacer></v-spacer>
                        <v-avatar class="primary" tile >
                          <!-- <span class="white--text" v-text="getDatemonth(card.date)"></span> -->
                        </v-avatar>
                      </v-card-title>
                     </v-layout>
                  </v-card-media >
                </v-card>
                <v-card>
                  <v-card-media height="65px">
                    <v-card-title >
                      <div >
                        <span class="title" v-text="card.title"></span><br>
                        <!-- <span class="grey--body-1" v-text="getDayname(card.date)"></span> -->
                        <span class="grey--body-1" v-text="card.location"></span>
                      </div>
                    </v-card-title>
                  </v-card-media>
                </v-card>
                <v-card>
                  <v-card-actions >
                    <div >
                      <!-- <span class="grey--body-1" >&num;{{ getDatetrip(card.date,card.enddate) }}</span> -->
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn  icon class="primary--text"
                      @click="liketrips(index)"
                      >
                        <v-icon v-if="favtrips(index)" >favorite</v-icon>
                        <v-icon v-else >favorite_border</v-icon>
                    </v-btn>
                    <v-btn icon @click='share(index)'>
                      <v-icon color="primary">share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <!-- bottom share social media -->
            <v-bottom-sheet v-model="sheet" >
              <v-layout class="white">
                <v-subheader class="subheading "><b>Share and Tell your Friends...</b></v-subheader>
              </v-layout>
              <v-layout class="white" pl-3>
                <v-container grid-list-md>
                <v-layout>
                  <social-sharing
                      :url="shareurl"
                      :title="sharetitle"
                      :description="sharedes"
                      :media="sharemedia"
                      :networks="overriddenNetworks"
                      inline-template>
                      <v-layout d-blok >
                      <v-flex xs2 >
                        <network network="weibo" >
                          <i><img
                            src="static/img/social/weibo.png"
                          ></i>
                        </network>
                      </v-flex>

                      <v-flex xs2>
                        <network network="qzone">
                          <i><img
                            src="static/img/social/qzone.png"
                          ></i>
                        </network>
                      </v-flex>

                      <v-flex xs2>
                        <network network="linkedin">
                          <i><img
                            src="static/img/social/linkedin.png"
                          ></i>
                        </network>
                      </v-flex>

                      </v-layout>
                  </social-sharing>
                </v-layout>
                </v-container>
              </v-layout>

            </v-bottom-sheet>
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        overriddenNetworks: {
          "qzone": {
            "sharer": "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=@url&title=@title",
            "type": "popup"
          },
          "weibo": {
            "sharer": "http://service.weibo.com/share/share.php?url=@url&title=@title&pic=@media",
            "type": "popup"
          }
        },
        sheet: false,
        shareurl:'',
        sharetitle:'',
        sharedes:'',
        sharemedia:'',
        cards: [],
        favlist: ['0001','0003','0005']
      }
    },
    methods: {
      share(msg) {
        this.sheet = true;
        this.sharetitle = this.cards[msg].title+" \nBest Trip Ever With SeeYou!";
        this.shareurl = "http://google.com/"+this.cards[msg].id;
        this.sharedes = this.cards[msg].cat +': '+ this.getDatemonth(this.cards[msg].date)+' '+ this.getDayname(this.cards[msg].date) ;
        this.sharemedia = this.cards[msg].src
      },
      getDayname(datestr){
        var date = new Date(datestr);
        var daylong = date.toLocaleDateString("en-US", { weekday: 'long'});
        var hourNum = date.getHours();
        var minNum = date.getMinutes()<10?'0':''
        var dayHour = daylong+', '+ hourNum+':'+minNum+ date.getMinutes();
        return dayHour
      },
      getDatemonth(datestr){
        var date = new Date(datestr);
        var monthnum = date.toLocaleDateString("en-US", { month: 'long'});
        var daynum = date.toLocaleDateString("en-US", { day: 'numeric'});
        var finaledate = daynum +'\n'+ monthnum.substring(0, 3);
        return finaledate
      },
      getDatetrip(datestr1,datestr2){
        var duration
        var date1 = new Date(datestr1);
        var date2 = new Date(datestr2);
        var daynum1 = date1.toLocaleDateString("en-US", { day: 'numeric'});
        var daynum2 = date2.toLocaleDateString("en-US", { day: 'numeric'});
        // var yearlong1 = date1.toLocaleDateString("en-US", { year: 'numeric'});
        // var monthlong1 = date1.toLocaleDateString("en-US", { month: 'long'});
        // var yearlong2 = date2.toLocaleDateString("en-US", { year: 'numeric'});
        // var monthlong2 = date2.toLocaleDateString("en-US", { month: 'long'});
        if (daynum1 == daynum2 && monthlong1==monthlong2) {
          var datetrip = 'One day trip';
          return datetrip
        }else {
          var datetrip = ' Deep tour';
          return datetrip
        }
      },
     favtrips(index){
       var fav = this.cards[index].id;
       for (var i = 0; i < this.favlist.length; i++) {
         if (this.favlist[i] == fav) {
           return true
         }
       }
     },
     liketrips(index){
       var trip  = this.cards[index].id;
       for (var i = 0; i < this.favlist.length; i++) {
         if (this.favlist[i] == trip) {
           this.favlist.splice(i,1);
           return
         }
       }
       this.favlist.push(trip)
     }
   },
   created(){
     this.$http.get("https://jsonplaceholder.typicode.com/photos")
     .then((res)=>{
      for (var i = 0; i < 20; i++) {
        const trips = []
        trips.id = res.data[i].id
        trips.title = res.data[i].title
        //trips.date = data[i].start_time
        //trips.enddate = data[i].end_time
        trips.src = res.data[i].url
        //trips.location = data[i].place
        //trips.cat = ''
        this.cards.push(trips)
      }
     })
     .catch((err)=>{
       console.log(err);
     });
   }
  }
</script>

<style scoped>
  .bordercard {
    border: 2px solid red;
  }
</style>
