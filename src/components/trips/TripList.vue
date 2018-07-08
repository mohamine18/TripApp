<template>
            <v-container  grid-list-md color ="cray">
            <!--Trip List-->
            <v-layout row wrap >
              <v-flex xs12 sm6 md6 lg4 v-for="(card,index) in cards" :key="card.title">
                <v-card class="elevation-1" flat  :to="{name:'TripDetails', params:{tripname:card.title}}">
                  <v-card-media
                    :src="card.src"
                    height="150px"
                  >
                     <v-layout column class="media">
                      <v-card-title>
                        <v-spacer></v-spacer>
                        <v-avatar class="primary" tile >
                          <span class="white--text" v-text="getDatemonth(card.date)"></span>
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
                        <span class="grey--body-1" v-text="getDayname(card.date)"></span> &nbsp;
                        <span class="grey--body-1" v-text="card.location"></span>
                      </div>
                    </v-card-title>
                  </v-card-media>
                </v-card>
                <v-card>
                  <v-card-actions >
                    <div >
                      <span class="grey--body-1" >&num;{{ card.cat }}</span>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn  icon class="primary--text"
                      @click="card.fav = !card.fav"
                      >
                      <v-badge color="red">
                        <span ><b>206</b></span>
                        <v-icon v-if="card.fav == false" >favorite_border</v-icon>
                        <v-icon v-else >favorite</v-icon>
                      </v-badge>
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
        sheet: false,
        shareurl:'',
        sharetitle:'',
        sharedes:'',
        sharemedia:'',
        cards: [
          {
            id: "0000",
            title: "Beidaihe Camping and Music",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874374551&di=839988958b0449bd64c6693626f8a574&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fe1fe9925bc315c608dc5863b87b1cb1348547796.jpg",
            date: "2018-06-12T02:20:00.000Z",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'Camping Trip',
          },
          {
            id: "0000",
            title: "Great Wall water side",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874440517&di=56060ead2b6ae842f06bff9afb938059&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fbeijing%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20140527%2F002564bc654b14ee8b2d02.jpg",
            date: "2018-07-20T02:10:00.000Z",
            location: "USTB, Beijing China",
            fav: true,
            cat: 'One Day Trip',
          },
          {
            id: "0000",
            title: "Tianjin Eye",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874486682&di=333a662177246c7e32f4ab1e711d8240&imgtype=0&src=http%3A%2F%2Fimg.kj-cy.cn%2Fuploads%2Flitimg%2F20170218%2F1487390247641431.jpg",
            date: "2018-08-31T02:01:00.000Z",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'Deep Tour',
          },
          {
            id: "0000",
            title: "Shidu water rafting",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874546799&di=374720d64fe35831e8b3bb50ea25f4c9&imgtype=0&src=http%3A%2F%2Fwww.shidu.cn%2Fyiriyou%2FUploadFiles_1589%2F201212%2F2012123018201658.jpg",
            date: "2018-09-01T02:05:00.000Z",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
          },
          {
            id: "0000",
            title: "River Camping",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874724480&di=4909c66b03799412d3b6b75f8c375247&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20174_5_0%2Fa2qvix56640358576405.jpeg",
            date: "2018-04-10T02:07:00.000Z",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
          },
          {
            id: "0000",
            title: "Color Art Town",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874828079&di=804df5d2593b6100629e63a9312f95ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F00e93901213fb80ef181be4a3cd12f2eb83894df.jpg",
            date: "2018-11-11T02:00:00.000Z",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
          }
        ],
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
      }
    }
  }
</script>

<style scoped>
  .bordercard {
    border: 2px solid red;
  }
</style>
