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
  </div>
</template>
<script>
export default {
  data: () => ({
    title:''
  }),
  created() {
    //do something after creating vue instance
    this.title = this.$route.params.cat
  },
}
</script>
<style scoped>
</style>
