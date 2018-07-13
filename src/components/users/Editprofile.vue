<template>
  <div >
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon :to="{name: 'Profile'}">
          <v-icon >close</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >Edit Profile</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.nativ="editClicked()">
          <v-icon v-if="change">edit</v-icon>
          <v-icon v-else>save</v-icon>
        </v-btn>
      </v-toolbar>
    </v-container>
    <!--Profile items-->
    <v-layout row justify-center>
      <v-card flat class="grey lighten-5">
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-subheader>General Information:</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="First name" required prepend-icon="person" v-model="item.userfirstname" :disabled="change"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Last name" required prepend-icon="person" v-model="item.userlastname" :disabled="change"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-radio-group v-model="item.usergender" row prepend-icon="nature_people" :disabled="change">
                  <v-radio label="Male" value="male" color="primary" :disabled="change"></v-radio>
                  <v-radio label="Female" value="female" color="primary" :disabled="change"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 sm6>
                <v-dialog
                  :disabled="change"
                  ref="menu"
                  lazy
                  persistent
                  :return-value.sync="item.userbirthday"
                  v-model="menu"
                  full-width
                  width="290px"

                >
                  <v-text-field
                    :disabled="change"
                    slot="activator"
                    label="Date of birth"
                    v-model="item.userbirthday"
                    prepend-icon="cake"
                    readonly
                  ></v-text-field>
                    <v-date-picker
                      scrollable
                      ref="picker"
                      v-model="item.userbirthday"
                      @change="save"
                      min="1950-01-01"
                      max="2015-12-31"
                    >
                    <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs12 sm6>
                <v-dialog scrollable
                  lazy
                  :disabled="change"
                  persistent
                  v-model="countrymenu"
                  full-width
                >
                  <v-text-field
                    :disabled="change"
                    slot="activator"
                    label="Country"
                    v-model="item.usercountry"
                    prepend-icon="language"
                    readonly
                  ></v-text-field>
                  <v-card >
                    <v-card-title><h3>Select your country: </h3></v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="pt-0 pb-0">
                      <v-radio-group v-model="item.usercountry" >
                        <v-radio v-for="elem in countries" :key="elem" :label="elem" :value="elem" color="primary"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" flat @click.native="countrymenu = false">Done</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>
              <v-subheader>Let us Tailor Your Trip Experience:</v-subheader>
              <v-flex xs12 sm6>
                <v-dialog scrollable max-width="300px"
                  :disabled="change"
                  lazy
                  persistent
                  v-model="interestmenu"
                  full-width
                >
                  <v-text-field
                    :disabled="change"
                    slot="activator"
                    label="Select the best outdour activities"
                    v-model="userinterest"
                    prepend-icon="whatshot"
                    readonly
                  ></v-text-field>
                  <v-card>
                    <v-card-title>Select Your Interests</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="pt-0 pb-0">
                      <v-checkbox height="5" v-for="(elem,i) in interestlist" :key="i" :label="elem" v-model="userinterest" :value="elem" color="primary" ></v-checkbox>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" flat @click.native="interestmenu = false">Done</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>
<script>
var countries = require('country-list')();
export default {
  data: () => ({
    change: true,
    menu: false,
    countrymenu: false,
    interestmenu: false,
    item: {
      userid: '',
      userfirstname:'Sahroui',
      userlastname : 'Delhim',
      usergender : 'male',
      userbirthday : '1985-02-06',
      usercountry : 'Algeria',
    },
    userinterest : [],
    interestlist: ['Camping', 'Swimming', 'Hiking', 'Star Gazing', 'Canoeing', 'Outdoor Movies', 'Water Park', 'Rock Climbing', 'Treasure Hunt',
    'Picnicking','Water Balloon War','Slip n Slide','Photography','Snow Skiing','Mountain Biking','Kite Flying','Glamping','Cycling','Block Party',
    'Gardening','Running','Fishing','Backyard Games','Walking Tour','Trail Running','Paddle Boarding','Whale Watching','Amusement Park','Yoga','Soccer',
    'Motor Cycling','Biergarten','Amphiteatre Concert','Surfing','Water skiing','Street Hockey','Beach Volleyball','Beach Bike Riding'
    ],
    countries : []
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    editClicked (){
      if (this.change == true) {
          this.change = false
      }else if (this.change == false) {
        //Don't forget to check the required inputes before saving the data
        //check Udemy Form validation
        this.change = true
      }
    }
  },
  watch:{
    countrymenu: function() {
          this.countries = countries.getNames()
    }
  },
  created() {
    //do something after creating vue instance
    this.item.userid = this.$route.params.userid
  }
}
</script>
<stylescoped>
</style>
