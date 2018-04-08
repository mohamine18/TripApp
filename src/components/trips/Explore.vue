<template>
  <div >
    <v-container>
      <component v-bind:is="'tool-bare'"></component>
    </v-container>
    <v-container fluid grid-list-md >
      <v-layout row wrap class="mb-5">
        <v-flex d-flex xs6 sm6 md4 >
          <v-card color="purple" height="auto" dark></v-card>
        </v-flex>
        <v-flex d-flex xs6 sm6 md4 >
          <v-card color="blue" height="auto" dark></v-card>
        </v-flex>
        <v-flex d-flex xs6 sm6 md4>
          <v-card color="orange" height="auto" dark></v-card>
        </v-flex>
        <v-flex d-flex xs6 sm6 md4>
          <v-card color="red" height="auto" dark></v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md4>
          <v-card color="green" height="auto" dark></v-card>
        </v-flex>
      </v-layout>
    </v-container>
      <component v-bind:is="'buttom-nav'"></component>
  </div>
</template>
<script>
import Toolbare from '@/components/app/Toolbare'
import Buttomnav from '@/components/app/Buttomnav'
export default {
  data: () => ({
    height: ''
  }),
  components:{
    'tool-bare': Toolbare,
    'buttom-nav': Buttomnav
  },
  beforeMount: function () {
    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    this.height = h;
  }
}
</script>
<style  scoped>

</style>
