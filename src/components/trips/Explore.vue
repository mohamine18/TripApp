<template>
  <div >
    <v-container>
      <component v-bind:is="'tool-bare'"></component>
    </v-container>
    <v-container fluid grid-list-md >
      <v-layout row wrap class="mb-5">
        <v-flex d-flex xs6 sm6 md4 >
          <v-card color="purple" height="200px" dark></v-card>
        </v-flex>
        <v-flex d-flex xs6 sm6 md4 >
          <v-card color="blue" height="200px" dark></v-card>
        </v-flex>
        <v-flex d-flex xs6 sm6 md4>
          <v-card color="orange" height="200px" dark></v-card>
        </v-flex>
        <v-flex d-flex xs6 sm6 md4>
          <v-card color="red" height="200px" dark></v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md4>
          <v-card color="green" height="200px" dark></v-card>
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

  }),
  components:{
    'tool-bare': Toolbare,
    'buttom-nav': Buttomnav
  }
}
</script>
<style  scoped>
</style>
