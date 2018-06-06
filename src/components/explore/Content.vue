<template>
  <div id="">
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon :to="'/Explore/'+$route.params.cityname">
          <v-icon >keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >{{ title }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon >menu</v-icon>
        </v-btn>
      </v-toolbar>
    </v-container>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 v-for="(card,i) in cards" :key="i" v-if="currentItem == card.tripcat">
          <v-card :to="'/Explore/'+$route.params.cityname+'/'+$route.params.cat+'/'+card.tripname+'/Spot_detail/1254854785'">
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
                  <v-btn flat depressed >
                    <v-icon left color="primary">visibility</v-icon>
                    1203
                  </v-btn>
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
    <v-container>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        right
        width = 250
      >
        <v-list class="pa-1">
          <v-list-tile >
              <v-list-tile-title ><h2>Spot category</h2></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" @click="currentItem = item">
            <v-list-tile-action>
              <v-icon>filter</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><h4> {{ item }} </h4></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    title:'',
    drawer: false,
    show: false,
    currentItem: 'Top Spot',
    items: ['Top Spot', 'Local Favorite', 'Temples & Mosques', 'Modern Architecture', 'Park & gardens' ],
    cards: [
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'allo', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', tripcat:'Top Spot', fav:true},
      {tripname:'Tian am men', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525002247762&di=e5c8b62e51ec1b510d7ccd3fbc1566b6&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F161227%2F106-16122G44114O9.jpg', tripcat:'Local Favorite', fav:false},
      {tripname:'CCTV Tower', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525002386731&di=9699cc5df6baeb5bf5c091c9289e3181&imgtype=0&src=http%3A%2F%2Fimages.china.cn%2Fsite1003%2F2017-10%2F07%2F8d6d8cbf-22a7-4227-8477-09f677527b31.jpg', tripcat:'Temples & Mosques',fav:false},
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', tripcat:'Top Spot',fav:false},
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', tripcat:'Top Spot',fav:false},
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', tripcat:'Top Spot',fav:false},

    ]
  }),
  created() {
    //do something after creating vue instance
    this.title = this.$route.params.cat
  },
  methods: {
      addItem (item) {
        const removed = this.items.splice(0, 1)
        this.items.push(
          ...this.more.splice(this.more.indexOf(item), 1)
        )
        this.more.push(...removed)
        this.$nextTick(() => { this.currentItem = 'tab-' + item })
      }
    }
}
</script>
<style  scoped>
</style>
