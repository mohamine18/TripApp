<template>
  <div >
      <v-container fluid grid-list-md >
          <v-container >
            <v-toolbar color="primary" dark dense fixed  flat >
              <v-btn icon :to="{ name: 'TripDetails', params:{tripname:this.$route.params.tripname , tripid:this.$route.params.tripid}}" >
                  <v-icon >chevron_left</v-icon>
              </v-btn>
              <v-toolbar-title d-block>
                <span >Booking</span>
              </v-toolbar-title>
            </v-toolbar>
          </v-container>
        <!-- Trip information -->
        <v-layout row wrap>
          <v-flex xs12 >
            <v-card flat >
              <v-list three-line class="grey lighten-5" >
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title><b>{{ item.tripname }}</b></v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.triplocation }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ getDatetrip(item.tripSdate,item.tripFdate) }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>Trip organized by {{ item.tripagent }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
        <!-- Hikers selection -->
        <v-layout row wrap  pb-1 pt-1>
          <v-flex xs12>
            <v-card flat class="grey lighten-5 ">
              <div class="text-xs-center" >
                <v-btn  depressed color="primary" dark @click.native="dialog =! dialog" >
                  <v-icon left dark>add_circle_outline</v-icon>
                    select Travelers
                  </v-btn>
              </div>
              <v-combobox
                flat
                chips
                tags
                solo
                prepend-icon=""
                append-icon=""
                v-model="hikers"
                multiple
                readonly
                background-color="grey lighten-5"
                class="pt-3"
              >
                <template slot="selection" slot-scope="data" d-block>
                    <v-chip
                      d-block
                      label
                      close
                      @input="remove(data.item)"
                      :selected="data.selected"
                    >
                      <strong>{{ data.item.hikername }}</strong>&nbsp;
                    </v-chip>
                </template>
              </v-combobox>
            </v-card>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
        <!-- SeeYou prices -->
        <v-container fluid grid-list-lg>
          <v-layout row wrap >
            <v-flex xs4 :id="blur1" >
              <v-card flat class="grey lighten-5">
                <v-card-media
                  contain
                  height="40px"
                  src="/static/img/pic1.png"
                >
                </v-card-media>
                <v-card-title class="text-xs-center">
                  <div >
                    <span class="grey--text">Sprout</span><br>
                    <span class="grey--text">{{ item.tripprices[0].price }} &yen;</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs4 :id="blur2">
              <v-card flat class="grey lighten-5">
                <v-card-media
                  contain
                  height="40px"
                  src="/static/img/pic2.png"
                >
                </v-card-media>
                <v-card-title class="text-xs-center">
                  <div class="center--text">
                    <span class="grey--text">Blossom</span><br>
                    <span class="grey--text">{{ item.tripprices[1].price }} &yen;</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs4 :id="blur3">
              <v-card flat class="grey lighten-5">
                <v-card-media
                  contain
                  height="40px"
                  src="/static/img/pic3.png"
                >
                </v-card-media>
                <v-card-title class="text-xs-center">
                  <div>
                    <span class="grey--text">Flower</span><br>
                    <span class="grey--text">{{ item.tripprices[2].price }} &yen;</span>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

        <v-divider></v-divider>
        <!-- Agree with the rules -->
        <v-layout  row wrap>
          <v-flex xs12>
            <v-list dense subheader class="grey lighten-5">
              <v-list-tile avatar>
              <v-list-tile-action>
                <v-checkbox v-model="termscheck" color="primary"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Agree with this <a v-on:click="termdialog =! termdialog">Disclaimer</a></v-list-tile-title>
              </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>

        <!--select hikers dialog-->
        <v-layout row justify-center>
          <v-dialog v-model="dialog" scrollable  persistent  >
            <v-card >
              <v-card-title><h3>Select Travelers</h3>
                <v-spacer></v-spacer>

              </v-card-title>
              <v-divider></v-divider>
              <v-card-text >
                <div class="text-xs-left" v-for="(item,i) in hikersDB" :key="i">
                  <v-checkbox :label="item.hikername" v-model="hikers" :value="item" color="primary" class="pt-0 pb-0"></v-checkbox>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn fab dark flat color="primary" :to="{ name: 'AddHikerInfo'}">
                  add traveler
                </v-btn>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">
                  Done
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>

        <!--Terms Dialogue-->
        <v-layout row justify-center >
          <v-dialog v-model="termdialog" scrollable  persistent >
            <v-card>
              <v-card-title>Terms of Service</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                {{ terms.term1 }} <br> {{ terms.term2 }} <br> {{ terms.term3 }} <br> {{ terms.term4 }} <br> {{ terms.term5 }} <br>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="termdialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>

        <!-- Price Details -->
        <v-layout row wrap>
          <div class="text-xs-center">
            <v-bottom-sheet v-model="sheet">
              <v-list >
                <v-subheader>Invoice details:</v-subheader>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title class="body-1" >QTY:</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text class="body-1">{{ tripQTY }}</v-list-tile-action-text>
                  </v-list-tile-action>
                </v-list-tile>

                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title class="body-1" >Unit Price:</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text class="body-1">{{ tripTotalPrice }} &yen;</v-list-tile-action-text>
                  </v-list-tile-action>
                </v-list-tile>

                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title class="body-2" >Total Price:</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text class="primary--text body-2">{{ tripFinalPrice }} &yen;</v-list-tile-action-text>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-bottom-sheet>
          </div>
        </v-layout>

          <!-- checkout button -->

              <v-container >
                <button >
                  <div id="fixedbutton">
                    <v-btn  block color="success" depressed :disabled='!termscheck' to="#" >Chekout</v-btn>
                  </div>
                  <div id="fixedbutton1">
                    <v-btn  block color="#FAFAFA" flat @click.native="sheet =true">{{ tripFinalPrice }} &yen;<v-icon right >arrow_drop_up</v-icon></v-btn>
                  </div>
                </button>
              </v-container>

 </div>
</template>

<script>
export default {
  data: () => ({
    blur1: 'blureclass',
    blur2: 'blureclass',
    blur3: 'blureclass',
    sheet: false,
    dialog: false,
    termdialog: false,
    termscheck: false,
    hikers: [],
    tripprice:'0',
    tripQTY: '0',
    hikersDB: [
      {hikerid: '0101', hikername: 'BOURAS Amine'},
      {hikerid: '0102', hikername: 'Sahraoui Delhim'},
      {hikerid: '0103', hikername: 'Sadam Sami'},
      {hikerid: '0104', hikername: 'Khalil Beskri'},
      {hikerid: '0105', hikername: 'Omar not Honest'}
    ],
    item:
      {
        tripname: '',
        tripagent: 'SeeYou',
        triplocation: 'Beidaihu, Hebei',
        tripSdate: '2018-07-14T00:00:00.000Z',
        tripFdate: '2018-07-14T12:00:00.000Z',
        tripprices: [{type:'sprout',price:'222'},{type:'blossom',price:'212'},{type:'flower',price:'207'}]
      },
    terms: {
      term1: '1) Refund princepal: No refund within 24h of departure time. Minimum 20 participants to confirm this trip, otherwise trip leader will refund you.',
      term2: '2) If you are late to the meeting point, we are sorry but we wont wait for you, because this is collective activity. So no refund in this case.',
      term3: '3) For one-day trips, no refund 24 hours before the trip, because we have already booked the bus and leave the seat for you.',
      term4: '4) We wont bear any responsability if - you get injured because you didnt follow our guides instructions. - you get injured because you lied about your illness (heart disease, asthma etc...), which directly resulted to your injuries during the trip. - you fight with others.',
      term5: '5) One should be fully aware of the unpredictabilities that outdoor activities may have.',
    },
  }),
  methods: {
      remove (item) {
          this.hikers.splice(this.hikers.indexOf(item), 1)
          this.hikers = [...this.hikers]
      },
      pricecalculator: function () {
        var totalpeople = this.hikers.length ;
        var price = this.hikers.length * parseInt(this.tripprice) ;
        this.tripTotalPrice= this.tripprice ;
        this.tripFinalPrice = price
        this.tripQTY = totalpeople
      },
      blurimages: function (){
        var totalpeople = this.hikers.length ;
        if (totalpeople == 0) {
          this.blur1 = 'blureclass'
          this.blur2 = 'blureclass'
          this.blur3 = 'blureclass'
        }else {
          if (totalpeople == 1) {
            this.blur1 = ''
            this.blur2 = 'blureclass'
            this.blur3 = 'blureclass'
            this.tripprice = this.item.tripprices[0].price
          } else {
            if (totalpeople == 2 || totalpeople ==3 ) {
              this.blur1 = 'blureclass'
              this.blur2 = ''
              this.blur3 = 'blureclass'
              this.tripprice = this.item.tripprices[1].price
            } else {
              this.blur1 = 'blureclass'
              this.blur2 = 'blureclass'
              this.blur3 = ''
              this.tripprice = this.item.tripprices[2].price
            }

          }
        }

      },
      getDatetrip(datestr1,datestr2){
        var date1 = new Date(datestr1);
        var date2 = new Date(datestr2);
        var monthlong1 = date1.toLocaleDateString("en-US", { month: 'long'});
        var daynum1 = date1.toLocaleDateString("en-US", { day: 'numeric'});
        var monthlong2 = date2.toLocaleDateString("en-US", { month: 'long'});
        var daynum2 = date2.toLocaleDateString("en-US", { day: 'numeric'});
        var daylong1 = date1.toLocaleDateString("en-US", { weekday: 'long'});
        var hourNum1 = date1.getHours();
        var minNum1 = date1.getMinutes()<10?'0':'';
        var daylong2 = date2.toLocaleDateString("en-US", { weekday: 'long'});
        var hourNum2 = date2.getHours();
        var minNum2 = date2.getMinutes()<10?'0':'';
        if (daynum1 == daynum2 && monthlong1==monthlong2) {
          var datetrip = daylong1+', '+monthlong1+' '+daynum1+' | '+hourNum1+':'+minNum1+ date1.getMinutes()+' - '+hourNum2+':'+minNum2+ date2.getMinutes();
          return datetrip
        }else {
          var datetrip = daylong1+', '+monthlong1+' '+daynum1+' - '+hourNum1+':'+minNum1+ date1.getMinutes()+' to '+daylong2+', '+monthlong2+' '+daynum2+' - '+hourNum2+':'+minNum2+ date2.getMinutes();
          return datetrip
        }
      }
    },
    watch: {
    hikers: function () {
      this.blurimages();
      this.pricecalculator();
      }
    },
    beforeMount: function () {
      this.pricecalculator();
      this.item.tripname = this.$route.params.tripname
    }
}
</script>

<style scoped>
a:link {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}
#fixedbutton {
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding-left: 10px;
    padding-right: 5px;
    padding-bottom: 6px;
    padding-top: 6px;
    width: 70%;
    background-color:#FAFAFA;
}
#fixedbutton1 {
    position: fixed;
    bottom: 0px;
    right: 0px;
    padding-left: 5px;
    padding-right: 10px;
    padding-bottom: 6px;
    padding-top: 6px;
    width: 30%;
    background-color:#FAFAFA;
}
#blureclass {
  -webkit-filter: opacity(.25);
  filter: opacity(.25);
}
</style>
