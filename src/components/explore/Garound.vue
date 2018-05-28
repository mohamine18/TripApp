<template>
    <v-container grid-list-xs class="grey lighten-3">
      <v-toolbar tabs color="primary" dark>
        <v-btn icon :to="'/Explore/'+$route.params.cityname">
          <v-icon >keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-tabs
          slot="extension"
          v-model="tabs"
          fixed-tabs
          color="primary"
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#mobile-tabs-5-1">
            <v-icon>flight</v-icon>
          </v-tab>
          <v-tab href="#mobile-tabs-5-2">
            <v-icon>directions_bus</v-icon>
          </v-tab>
          <v-tab href="#mobile-tabs-5-3">
            <v-icon>local_taxi</v-icon>
          </v-tab>
          <v-tab href="#mobile-tabs-5-4">
            <v-icon>directions_car</v-icon>
          </v-tab>
          <v-tab href="#mobile-tabs-5-5">
            <v-icon>directions_bike</v-icon>
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-tabs-items v-model="tabs" class="grey lighten-3">
        <!-- On arrival -->
        <v-tab-item :id="'mobile-tabs-5-1'">
          <v-card color="grey lighten-3" v-for="(item,i) in carditems" v-if="item.cat == 'arrival'" :key="i" flat>
            <v-card-title><b>{{ item.name }}</b></v-card-title>
            <v-card-text >{{ item.text }}</v-card-text>
          </v-card>
          <v-expansion-panel expand>
            <v-expansion-panel-content v-for="(item,i) in tabitems" v-if="item.cat == 'arrival'" :key="i">
              <div slot="header">
                <v-icon color="red" left>{{ item.icon }}</v-icon>
                  <span class="text"><b>{{ item.name }}</b></span>
              </div>
              <v-card >
                <v-card-text class="grey lighten-3">{{ item.text }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-tab-item>

        <!-- Public transportation -->
        <v-tab-item :id="'mobile-tabs-5-2'">
          <v-card color="grey lighten-3" v-for="(item,i) in carditems" v-if="item.cat == 'trans'" :key="i" flat>
            <v-card-title><b>{{ item.name }}</b></v-card-title>
            <v-card-text >{{ item.text }}</v-card-text>
          </v-card>
          <v-expansion-panel expand>
            <v-expansion-panel-content v-for="(item,i) in tabitems" v-if="item.cat == 'trans'" :key="i" >
              <div slot="header">
                <v-icon color="red" left>{{ item.icon }}</v-icon>
                  <span class="text"><b>{{ item.name }}</b></span>
              </div>
              <v-card>
                <v-card-text class="grey lighten-3">{{ item.text }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-tab-item>

        <!-- Local Taxi -->
        <v-tab-item :id="'mobile-tabs-5-3'">
          <v-card color="grey lighten-3" v-for="(item,i) in carditems" v-if="item.cat == 'taxi'" :key="i" flat>
            <v-card-title><b>{{ item.name }}</b></v-card-title>
            <v-card-text >{{ item.text }}</v-card-text>
          </v-card>
          <v-expansion-panel expand>
            <v-expansion-panel-content v-for="(item,i) in tabitems" v-if="item.cat == 'taxi'" :key="i">
              <div slot="header">
                <v-icon color="red" left>{{ item.icon }}</v-icon>
                  <span class="text"><b>{{ item.name }}</b></span>
              </div>
              <v-card>
                <v-card-text class="grey lighten-3">{{ item.text }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-tab-item>

        <!-- Driving -->
        <v-tab-item :id="'mobile-tabs-5-4'">
          <v-card color="grey lighten-3" v-for="(item,i) in carditems" v-if="item.cat == 'driving'" :key="i" flat>
            <v-card-title><b>{{ item.name }}</b></v-card-title>
            <v-card-text >{{ item.text }}</v-card-text>
          </v-card>
          <v-expansion-panel expand>
            <v-expansion-panel-content v-for="(item,i) in tabitems" v-if="item.cat == 'driving'" :key="i">
              <div slot="header">
                <v-icon color="red" left>{{ item.icon }}</v-icon>
                  <span class="text"><b>{{ item.name }}</b></span>
              </div>
              <v-card>
                <v-card-text class="grey lighten-3">{{ item.text }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-tab-item>

        <!-- Walking and biking -->
        <v-tab-item :id="'mobile-tabs-5-5'">
          <v-card color="grey lighten-3" v-for="(item,i) in carditems" v-if="item.cat == 'bike'" :key="i">
            <v-card-title><b>{{ item.name }}</b></v-card-title>
            <v-card-text >{{ item.text }}</v-card-text>
          </v-card>
          <v-expansion-panel expand>
            <v-expansion-panel-content v-for="(item,i) in tabitems" v-if="item.cat == 'bike'" :key="i">
              <div slot="header">
                <v-icon color="red" left>{{ item.icon }}</v-icon>
                  <span class="text"><b>{{ item.name }}</b></span>
              </div>
              <v-card>
                <v-card-text class="grey lighten-3">{{ item.text }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-tab-item>
      </v-tabs-items>
    </v-container>

</template>
<script>
  export default {
    data: () => ({
      title: '',
      tabs: null,
      tabitems: [
        {cat:'arrival', name:'Subway', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', icon:'subway'},
        {cat:'arrival', name:'Ride service', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', icon:'directions_car'},
        {cat:'arrival', name:'Taxi', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', icon:'local_taxi'},
        {cat:'arrival', name:'Bus', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', icon:'directions_bus'},
        {cat:'trans', name:'Tickets & Smartcards', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', icon:'payment'},
        {cat:'trans', name:'Subway', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', icon:'subway'},
        {cat:'trans', name:'Bus', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', icon:'directions_bus'}
      ],
      carditems: [
        {cat:'arrival', name:'From & To Beijing International Airport', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {cat:'trans', name:'Public Transportation', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {cat:'driving', name:'Driving', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {cat:'taxi', name:'Taxi', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {cat:'bike', name:'On foot', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {cat:'bike', name:'By bike', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {cat:'taxi', name:'Ride Service', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
      ]
    }),
    created() {
      this.title = this.$route.params.cat
    }
  }
</script>
<style scoped>
</style>
