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
                          <span class="white--text" v-text="card.date"></span>
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
                        <span class="grey--body-1" v-text="card.time"></span> &nbsp;
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
                      <v-icon v-if="card.fav == false" >favorite_border</v-icon>
                      <v-icon v-else >favorite</v-icon>
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
              <v-layout class="white">
                <v-container grid-list-md>
                <v-layout>
                  <social-sharing
                      :url="shareurl"
                      :title="sharetitle"
                      :description="sharedes"
                      inline-template>
                      <v-layout d-blok>
                      <v-flex xs2>
                        <network network="facebook">
                          <i><img
                            src="static/img/social/facebook.png"
                          ></i>
                        </network>
                      </v-flex>

                      <v-flex xs2>
                        <network network="weibo">
                          <i><img
                            src="static/img/social/weibo.png"
                          ></i>
                        </network>
                      </v-flex>

                      <v-flex xs2 >
                        <network network="vk">
                          <i><img
                            src="static/img/social/vk.png"
                          ></i>
                        </network>
                      </v-flex>

                      <v-flex xs2>
                        <network network="linkedin">
                          <i><img
                            src="static/img/social/whatsapp.png"
                          ></i>
                        </network>
                      </v-flex>
                      </v-layout>
                  </social-sharing>
                  <!-- <v-flex xs2
                    v-for="tile in tiles"
                    :key="tile.title"
                  >
                      <img
                        :src="`static/img/social/${tile.img}`"
                        :alt="tile.title"
                      >

                  </v-flex> -->
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
        tiles: [
          { img: 'wechat.png', title: 'Wechat' },
          { img: 'weibo.png', title: 'Weibo' },
          { img: 'facebook.png', title: 'Facebook' },
          { img: 'vk.png', title: 'VKontakte' },
          { img: 'whatsapp.png', title: 'WhatsApp' }
        ],
        cards: [
          {
            id: "0000",
            title: "Beidaihe Camping & Music",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874374551&di=839988958b0449bd64c6693626f8a574&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fe1fe9925bc315c608dc5863b87b1cb1348547796.jpg",
            date: "15 MAY",
            time: "TUE, 9:00 AM",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
          },
          {
            id: "0000",
            title: "Great Wall water side",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874440517&di=56060ead2b6ae842f06bff9afb938059&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fbeijing%2Fimg%2Fattachement%2Fjpg%2Fsite1%2F20140527%2F002564bc654b14ee8b2d02.jpg",
            date: "10 JUNE",
            time: "TUE, 9:00 AM",
            location: "USTB, Beijing China",
            fav: true,
            cat: 'One Day Trip',
          },
          {
            id: "0000",
            title: "Tianjin Eye",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874486682&di=333a662177246c7e32f4ab1e711d8240&imgtype=0&src=http%3A%2F%2Fimg.kj-cy.cn%2Fuploads%2Flitimg%2F20170218%2F1487390247641431.jpg",
            date: "07 JULY",
            time: "TUE, 9:00 AM",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
          },
          {
            id: "0000",
            title: "Shidu water rafting",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874546799&di=374720d64fe35831e8b3bb50ea25f4c9&imgtype=0&src=http%3A%2F%2Fwww.shidu.cn%2Fyiriyou%2FUploadFiles_1589%2F201212%2F2012123018201658.jpg",
            date: "28 MAY",
            time: "TUE, 9:00 AM",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
          },
          {
            id: "0000",
            title: "River Camping",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874724480&di=4909c66b03799412d3b6b75f8c375247&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20174_5_0%2Fa2qvix56640358576405.jpeg",
            date: "15 APRIL",
            time: "TUE, 9:00 AM",
            location: "USTB, Beijing China",
            fav: false,
            cat: 'One Day Trip',
          },
          {
            id: "0000",
            title: "Color Art Town",
            src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530874828079&di=804df5d2593b6100629e63a9312f95ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F00e93901213fb80ef181be4a3cd12f2eb83894df.jpg",
            date: "05 MAY",
            time: "TUE, 9:00 AM",
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
        this.shareurl = "http://localhost:8080/#/Trip-Details/"+this.cards[msg].id;
        this.sharedes = this.cards[msg].cat +': '+ this.cards[msg].date +' '+ this.cards[msg].time ;
        console.log(this.shareurl);
        console.log(this.sharetitle);
        console.log(this.sharedes);
      }
    }
  }
</script>

<style scoped>
  .bordercard {
    border: 2px solid red;
  }
</style>
