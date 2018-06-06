<template>
  <div>
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon :to="'/Explore/'+$route.params.cityname">
          <v-icon >keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span class="title">{{ title }}</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-container>
    <div v-if="condition == 2">
      <empty-comp></empty-comp>
    </div>
    <div v-else>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 v-for="(card,i) in cards" :key="i" v-if="currentItem == card.tripcat">
            <v-card :to="'/Explore/'+$route.params.cityname+'/'+$route.params.cat+'/'+card.tripname+'/Spot_detail'">
              <v-card-media
                :src="card.picurl"
                height="180px"
              >
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <div class="title">{{ card.tripname }}</div>
                  <span class="grey--text">{{ card.tripabstract }}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn  icon class="primary--text"
                      @click="card.fav = !card.fav"
                      >
                      <v-icon v-if="card.fav == false" >bookmark_border</v-icon>
                      <v-icon v-else >bookmark</v-icon>
                    </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
import empty from '@/components/explore/Empty'
export default {
  data: () => ({
    condition:'2',
    cards: [
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'allo', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', fav:true},
    ]
  }),
  components: {
    'emptyComp': empty
  },
  created() {
    this.title = this.$route.params.cat
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
