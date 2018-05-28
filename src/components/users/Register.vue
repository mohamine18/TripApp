<template>
  <div class="hidden-md-and-up">
      <v-container fluid grid-list-lg >
        <v-layout>
          <v-container>
            <v-toolbar color="primary" dark dense fixed  flat class="hidden-md-and-up">
              <v-btn icon :to="'/Trip-Details/'+$route.params.tripname">
                  <v-icon >chevron_left</v-icon>
              </v-btn>
              <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
                <span >Booking</span>
              </v-toolbar-title>
            </v-toolbar>
          </v-container>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card  :style="{'border-radius': '5px','border': '0.2px solid red'}">
              <v-container >
                <v-layout row v-for="(item,i) in items" :key="i">
                  <v-flex xs7 >
                    <div>
                      <span class="body-2">{{ item.tripname }}</span><br>
                      <span class="body-2">{{ item.tripdate }}</span> <br>
                      <span class="body-2">{{ item.tripprice }} &yen;</span>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      :src="item.tripimg"
                      height="80px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-subheader>Select Hikers:</v-subheader>
          <v-flex xs12>
            <v-card :style="{'border-radius': '5px'}" >
              <div class="text-xs-center pb-2 pt-2" >
                <v-btn round color="primary" dark @click.native="dialog =! dialog" >
                  <v-icon left dark>add_circle_outline</v-icon>
                  Add Travelers</v-btn>
              </div>
              <v-select
                label="Select Hikers"
                chips
                tags
                solo
                prepend-icon="group"
                append-icon=""
                v-model="hikers"
                readonly
              >
                <template slot="selection" slot-scope="data" d-block>
                    <v-chip
                      d-block
                      close
                      @input="remove(data.item)"
                      :selected="data.selected"
                    >
                      <strong>{{ data.item }}</strong>&nbsp;
                    </v-chip>
                </template>
              </v-select>
            </v-card>
          </v-flex>
        </v-layout>


        <v-layout row wrap >
          <v-subheader>Entre Promotional Code:</v-subheader>
          <v-layout row wraps>
            <v-flex xs8>
              <v-text-field clearable solo label="Promotional code" color="primary" v-model="tripDiscountAmount"></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-btn color="primary" @click.native="snackbarmsg()">Check</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>

      <!--select hikers-->
      <v-layout row justify-center>
        <v-dialog v-model="dialog" scrollable max-width="300px" persistent >
          <v-card>
            <v-card-title class="body-2">Select a Hiker
              <v-spacer></v-spacer>
              <v-btn fab dark small flat color="primary" to="/Add-Hiker-info">
                <v-icon dark>fas fa-user-plus</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text >
              <div class="text-xs-left" v-for="(item,i) in hikersDB" :key="i">
                <v-checkbox :label="item" v-model="hikers" :value="item" color="primary"></v-checkbox>
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
      <!--terms-->
      <v-layout row justify-center>
        <v-dialog v-model="termdialog" scrollable max-width="300px" persistent >
          <v-card>
            <v-card-title>Terms of Service</v-card-title>
            <v-divider></v-divider>
            <v-card-text >
              {{ terms }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="termdialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>

      <v-layout row wrap>
        <div class="text-xs-center">
          <v-bottom-sheet v-model="sheet">
            <v-list >
              <v-subheader>Payment details:</v-subheader>
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
                  <v-list-tile-title class="body-1" >Total Price:</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text class="body-1">{{ tripTotalPrice }} &yen;</v-list-tile-action-text>
                </v-list-tile-action>
              </v-list-tile>

              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title class="body-1" >Discount Amount:</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text class="body-1">{{ tripDiscountAmount }} &yen;</v-list-tile-action-text>
                </v-list-tile-action>
              </v-list-tile>

              <v-list-tile avatar>
                <v-list-tile-content>
                  <v-list-tile-title class="body-2" >Final Price:</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text class="primary--text body-2">{{ tripFinalPrice }} &yen;</v-list-tile-action-text>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-bottom-sheet>
        </div>
      </v-layout>

      <button>
        <div id="fixedbutton">
          <v-flex xs12>
            <v-list >
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
          <v-btn  block color="success" depressed :disabled='!termscheck' to="#" >Chekout</v-btn>
        </div>
        <div id="fixedbutton1">
          <v-btn  block color="white" depressed @click.native="sheet =true">{{ tripFinalPrice }} &yen;<v-icon right dark>arrow_drop_up</v-icon></v-btn>
        </div>
      </button>

      <v-card>
        <v-snackbar
          :timeout="timeout"
          top
          v-model="snackbar"
          :color="snackbarcolor"
        >
          {{ snackbartext }}
          <v-btn flat color="white" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-card>

 </div>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    snackbar: false,
    dialog: false,
    termdialog: false,
    termscheck: false,
    snackbartext: '',
    timeout: 2000,
    snackbarcolor:'',

    hikers: ['BOURAS Amine'],
    hikersDB: ['BOURAS Amine','Sahraoui Delhim', 'Sadam Sami', 'Khalil Beskri', 'Omar not Honest'],
    items: [
      {
        tripname: 'Beijing Great Wall',
        tripdate: 'Sunday 2018-04-01',
        tripprice: '212',
        tripimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522577932652&di=b2c96b6cbb42205dd9b7c350f46ffc98&imgtype=0&src=http%3A%2F%2Fwww.kedo.gov.cn%2Fupload%2Fresources%2Fimage%2F2015%2F05%2F25%2F86360_500x500.jpg',
      }
    ],
    terms: '1) Refund princepal: No refund within 24h of departure time. Minimum 20 participants to confirm this trip, otherwise trip leader will refund you. 2) If you are late to the meeting point, we are sorry but we wont wait for you, because this is collective activity. So no refund in this case. 3) For one-day trips, no refund 24 hours before the trip, because we have already booked the bus and leave the seat for you. 4) We wont bear any responsability if - you get injured because you didnt follow our guides instructions. - you get injured because you lied about your illness (heart disease, asthma etc...), which directly resulted to your injuries during the trip. - you fight with others. 5) One should be fully aware of the unpredictabilities that outdoor activities may have.',
    tripprice: '222',
    tripQTY:'',
    tripTotalPrice: '',
    tripDiscountAmount: '',
    tripFinalPrice: '',
  }),
  methods: {
      remove (item) {
        if (this.hikers.length>1){
          this.hikers.splice(this.hikers.indexOf(item), 1)
          this.hikers = [...this.hikers]
        }

      },
      pricecalculator: function () {
        var totalpeople = this.hikers.length ;
        var price = this.hikers.length * parseInt(this.tripprice) ;
        this.tripTotalPrice= price ;
        this.tripQTY= totalpeople ;
        if (this.tripDiscountAmount == 0) {
          this.tripFinalPrice= price ;
        } else {
          this.tripFinalPrice = price - parseInt(this.tripDiscountAmount);
        }
      },
      snackbarmsg: function () {
        if (this.tripDiscountAmount == '5'){
          this.snackbarcolor = 'success';
          this.snackbartext = 'You Have a '+this.tripDiscountAmount+ ' RMB discount';
        }else {
          this.snackbarcolor = 'primary';
          this.snackbartext = 'Your Promotional Code is not valid';
        }
        this.snackbar = true;
      }
    },
    watch: {
    hikers: function () {
        this.pricecalculator();
      },
      tripDiscountAmount: function () {
        this.pricecalculator();
      }
    },
    beforeMount: function () {
      this.pricecalculator();
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
    background-color:white;
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
    background-color:white;
}

</style>
