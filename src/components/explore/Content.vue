<template>
  <div id="">
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/Explore">
          <v-icon >keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >{{ $route.params.cityname }} Life</span>
        </v-toolbar-title>
      </v-toolbar>
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
<style  scoped>
</style>
