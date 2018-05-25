<template>
  <div id="">
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/Explore">
          <v-icon >keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >{{ $route.params.cityname }} Life</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-container>

    <v-container fluid grid-list-md class="white">
      <v-layout row wrap >
        <v-flex xs6>
          <v-card :style="{'border-radius': '5px'}" :to="'/Explore/'+$route.params.cityname+'/Things_to_Do'">
            <v-card-media class="red lighten-5">
              <img src="/static/img/Thing_to_Do.png" alt="">
            </v-card-media>
            <v-divider></v-divider>
            <v-card-text class="red lighten-3">
                <h3 class="text-xs-center">Things to Do</h3>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card :style="{'border-radius': '5px'}">
            <v-card-media class="deep-purple lighten-5">
              <img src="/static/img/Day_Plan.png" alt="">
            </v-card-media>
            <v-divider></v-divider>
            <v-card-text class="deep-purple lighten-3">
                <h3 class="text-xs-center">Day Plan</h3>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card :style="{'border-radius': '5px'}">
            <v-card-media class="blue lighten-5">
              <img src="/static/img/Saved_Places.png" >
            </v-card-media>
            <v-divider></v-divider>
            <v-card-text class="blue lighten-3">
                <h3 class="text-xs-center">Saved Places</h3>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card :style="{'border-radius': '5px'}">
            <v-card-media class="teal lighten-5">
              <img src="/static/img/Getting_Around.png">
            </v-card-media>
            <v-divider></v-divider>
            <v-card-text class="teal lighten-3">
                <h3 class="text-xs-center">Getting Around</h3>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12>
          <v-card :style="{'border-radius': '5px'}">
            <v-card-media class="lime lighten-5">
              <img src="/static/img/Family.png" class="imagstyle">
            </v-card-media>
            <v-divider></v-divider>
            <v-card-text class="lime lighten-3">
                <h3 class="text-xs-center">Family Plan</h3>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
  })
}
</script>
<style scoped>

.imagstyle{
    width: auto;
    margin-left: auto;
  	margin-right: auto;
  	display: block;

}
</style>
