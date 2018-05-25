<template>
  <div >
    <component v-bind:is="'tool-bare'"></component>
    <v-container fluid grid-list-md >
      <v-layout row wrap  justify-center class="mb-5">
        <v-flex d-flex xs11 sm6 md4 v-for="(item,i) in items" :key="i" class="mt-2">
          <v-card  :style="{'border-radius': '5px'}" height="200px" dark :img="item.src"  raised :to="'/Explore/'+item.name">
            <v-card-actions class="body-2"> #{{item.name }} </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
      <component v-bind:is="'buttom-nav'"></component>
  </div>
</template>
<script>
import Toolbare from '@/components/app/navline'
import Buttomnav from '@/components/app/Buttomnav'
export default {
  data: () => ({

    items: [
      {name: 'Beijing', src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523282355811&di=54f8f574679ae1b2891c05623a9c1714&imgtype=0&src=http%3A%2F%2Fpic.people.com.cn%2FNMediaFile%2F2016%2F0208%2FMAIN201602080855000375526896361.jpg'},
      {name: 'Shanghai', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523282451489&di=25d8160c8bf2057733eca4cad12fa92f&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150420%2Ftooopen_sy_119358362235.jpg'},
      {name: 'Guangzhou', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523282468128&di=06162a7c1db6a204654e503b549c9ca1&imgtype=0&src=http%3A%2F%2Fcs.xinpianchang.com%2Fuploadfile%2Farticle%2F2016%2F08%2F10%2F57aadedb9b10c.jpeg%40960w.jpg'},
      {name: 'Hangzhou', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523282510380&di=70ab1900753174cdc918f58bee6ee3e3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D9c4fe4342d9759ee5e5d688bdb83267a%2F242dd42a2834349b978eeebcc2ea15ce36d3be7b.jpg'},
      {name: 'Shenzhen', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523282537832&di=1e2f856b15e946ff57b27a60ec5d1d9c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D656f372d69d0f703f2bf9d9c61823451%2Feaf81a4c510fd9f9385634532e2dd42a2834a443.jpg'},
    ]
  }),
  components:{
    'tool-bare': Toolbare,
    'buttom-nav': Buttomnav
  },
  beforeMount: function () {
    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  }
}
</script>
<style  scoped>

</style>
