<template>
  <div id="">
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon :to="'/Explore/'+$route.params.cityname">
          <v-icon >keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >{{ $route.params.cityname }} Life</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-container>
    <div>
        <div class="">

        </div>
        <v-tabs
          color="transparent"
          slot="extension"
          show-arrows
          fixed-tabs
          v-model="currentItem"
          prev-icon="keyboard_arrow_left"
          next-icon="keyboard_arrow_right"

        >
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab
            v-for="item in items"
            :key="item"
            :href="'#tab-' + item"
          >
            {{ item }}
          </v-tab>

        <v-tabs-items v-model="currentItem" >
          <v-tab-item
            v-for="item in items"
            :key="item"
            :id="'tab-' + item"
          >
            <v-card flat color="transparent">
              <v-card-text>
                <h3>{{ item }}</h3>
              </v-card-text>
            </v-card>

            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex xs12 v-for="(card,i) in cards" :key="i" v-if="currentItem == card.tripcat">
                  <v-card >
                    <v-card-media
                      :src="card.picurl"
                      height="200px"
                    >
                    </v-card-media>
                    <v-card-title primary-title>
                      <div>
                        <div class="title">{{ card.tripname }}</div>
                        <span class="grey--text">{{ card.tripabstract }}</span>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-layout>
                        <v-flex>
                          <v-btn flat>
                            <v-icon left >visibility</v-icon>
                            1203
                          </v-btn>
                        </v-flex>
                        <v-flex>
                          <v-btn flat>
                            <v-icon>bookmark_border</v-icon>
                          </v-btn>
                        </v-flex>
                        <v-flex>
                          <v-btn icon @click.native="show = !show">
                            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-card-actions>
                    <v-slide-y-transition>
                      <v-card-text v-show="show">
                        {{ card.tripintro }}
                      </v-card-text>
                    </v-slide-y-transition>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

          </v-tab-item>
        </v-tabs-items>
      </v-tabs>

    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    show: false,
    currentItem: 'tab-Top Spot',
    items: ['Top Spot', 'Local Favorite', 'Temples & Mosques', 'Modern Architecture', 'Park & gardens', 'Places A-Z' ],
    cards: [
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'allo', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', tripcat:'tab-Top Spot'},
      {tripname:'Tian am men', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525002247762&di=e5c8b62e51ec1b510d7ccd3fbc1566b6&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F161227%2F106-16122G44114O9.jpg', tripcat:'tab-Local Favorite'},
      {tripname:'CCTV Tower', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525002386731&di=9699cc5df6baeb5bf5c091c9289e3181&imgtype=0&src=http%3A%2F%2Fimages.china.cn%2Fsite1003%2F2017-10%2F07%2F8d6d8cbf-22a7-4227-8477-09f677527b31.jpg', tripcat:'tab-Temples & Mosques'},
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', tripcat:'tab-Top Spot'},
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', tripcat:'tab-Top Spot'},
      {tripname:'Beajing Great Wall', tripabstract:'10.000 steps of adventure', tripintro:'', picurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg', tripcat:'tab-Top Spot'},

    ]
  }),
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
