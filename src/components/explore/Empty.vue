<template>
  <v-container fluid grid-list-md   >
    <v-layout row wrap  >
      <v-flex xs12>
        <v-card  flat :style="{'border-radius': '5px'}">
          <v-card-text class="white">
              <h3 class="text-xs-center ">Nothing Saved near <p class="primary--text">{{ $route.params.cityname }}</p></h3>
          </v-card-text>
          <v-card-media class="white">
            <img src="/static/img/empty11.png" alt="">
          </v-card-media>
        </v-card>
      </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  data: () => ({
  })
}
</script>
<style scoped>
</style>
