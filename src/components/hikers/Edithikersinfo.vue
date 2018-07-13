<template>
  <div>
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon :to="{name:'hikersInfo'}">
          <v-icon >close</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span ></span>
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
          <v-container grid-list-md class="pt-1 pb-0">
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-subheader>Please enter the traveler information as it appears on the national ID card.</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Family name*" required prepend-icon="person" v-model="item.userfirstname" :disabled="change"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Given name*" required prepend-icon="remove " v-model="item.userlastname" :disabled="change"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Phone Number*" required prepend-icon="phone_iphone" v-model="item.userphone" :disabled="change"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="ID type*"
                  :disabled="change"
                  required
                  :items="['Passport', 'Mainland Chinese ID']"
                  prepend-icon="contacts"
                  v-model="item.idtype"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="ID number*" required prepend-icon="remove" v-model="item.idnumer" :disabled="change" ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-radio-group v-model="item.usergender" row prepend-icon="nature_people" :disabled="change">
                  <v-radio label="Male" value="male" color="primary" :disabled="change"></v-radio>
                  <v-radio label="Female" value="female" color="primary" :disabled="change"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 sm6>
                <v-dialog scrollable
                  lazy
                  persistent
                  v-model="countrymenu"
                  full-width
                  :disabled="change"
                >
                  <v-text-field
                  :disabled="change"
                    slot="activator"
                    label="Country*"
                    v-model="item.usercountry"
                    prepend-icon="language"
                    readonly
                  ></v-text-field>
                  <v-card>
                    <v-card-title>Select Country</v-card-title>
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
                        <small>*indicates required field</small>
              <v-flex xs12 sm6>
                <v-btn block color="primary" :disabled="!change" depressed @click.native="removedialog = true">Delete</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="removedialog" persistent max-width="290">
        <v-card>
          <v-card-title class="body-2">Are you sure you want to delete {{ item.userlastname }}?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary"  @click.native="removedialog = false">OK</v-btn>
            <v-btn color="primary" outline @click.native="removedialog = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
var countries = require('country-list')();
export default {
  data: () => ({
    change: true,
    countrymenu: false,
    removedialog: false,
    item:{
      travid: '',
      userfirstname:'BOURAS',
      userlastname : 'Mohammed Amine',
      userphone: '18811454745',
      idtype : 'Passport',
      idnumer : '152499721',
      usergender : 'male',
      usercountry : 'Algeria',
    },
    countries : []
  }),
  methods: {
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
    this.item.travid = this.$route.params.travid
  }
}
</script>
<stylescoped>
</style>
