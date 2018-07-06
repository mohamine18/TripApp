<template>
  <div >
    <v-container fluid grid-list-xs>
      <v-layout>
        <v-container >
          <v-toolbar color="primary" dark dense fixed  flat >
            <v-btn icon :to="{name:'TripDetails', params:{tripname:name}}" >
                <v-icon >chevron_left</v-icon>
            </v-btn>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
              <span >{{name}}</span>
            </v-toolbar-title>
          </v-toolbar>
        </v-container>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xs>
      <v-layout row wrap>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <v-flex
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          xs6
        >
          <v-card flat tile >
            <v-card-media class="imggallery" :src="'images'+imageIndex" @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')',  height: '150px' }"
            >
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import VueGallery from 'vue-gallery';
export default {
  data: () => ({
  images: [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530855189100&di=ade98001913a63a273646a7b97e3d4df&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F64380cd7912397dd198f04995382b2b7d1a287bd.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530855189100&di=98deb806a1c3d118c50cd00443b8cb07&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd0c8a786c9177f3e7bfe5fd97acf3bc79e3d561f.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530855189100&di=8c638701bc8e0494ebd3f642abd6a8ee&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccc87637bd0be93901203f9299.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530855189100&di=ade98001913a63a273646a7b97e3d4df&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F64380cd7912397dd198f04995382b2b7d1a287bd.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530855189100&di=98deb806a1c3d118c50cd00443b8cb07&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd0c8a786c9177f3e7bfe5fd97acf3bc79e3d561f.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530855189099&di=480c72ce3637f651ba2b5433f6ca39a3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D7ec224fa89025aafc73f768b9295ce08%2Fdbb44aed2e738bd41ccdd00baa8b87d6277ff918.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530855189100&di=8c638701bc8e0494ebd3f642abd6a8ee&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3ccc87637bd0be93901203f9299.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530855189099&di=480c72ce3637f651ba2b5433f6ca39a3&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D7ec224fa89025aafc73f768b9295ce08%2Fdbb44aed2e738bd41ccdd00baa8b87d6277ff918.jpg',
  ],
  index: null
  }),
  components: {
    'gallery': VueGallery
  },
    created: function () {
         this.name = this.$route.params.tripname
   }
}
</script>
<style scoped>
.imggallery {
    display: block;
    background-position: center;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;

}
</style>
