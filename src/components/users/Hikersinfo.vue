<template>
  <div class="hidden-md-and-up ">
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/">
          <v-icon >fas fa-times</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >Travelers Information</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon to="#">
          <v-icon >fas fa-check</v-icon>
        </v-btn>
      </v-toolbar>
    </v-container>
    <!--Travelers Information-->
    <v-layout row justify-center>

    </v-layout>
  </div>
</template>
<script>
export default {
  data: () => ({

  })
}
</script>
