<template>
  <div >
    <v-container fluid grid-list-xs>
      <v-layout>
        <v-container >
          <v-toolbar color="primary" dark dense fixed  flat >
            <v-btn icon :to="'/Trip-Details/'+$route.params.tripname">
                <v-icon >chevron_left</v-icon>
            </v-btn>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
              <span >{{$route.params.tripname}}</span>
            </v-toolbar-title>
          </v-toolbar>
        </v-container>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xs>
      <v-layout row wrap>
        <v-flex
          v-for="n in 15"
          :key="n"
          xs4
        >
          <v-card flat tile>
            <v-card-media
              :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
              height="150px"
            >
            </v-card-media>
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
</style>
