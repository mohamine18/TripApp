<template>
    <v-layout>
      <v-toolbar color="primary" dark dense fixed app flat >
        <!-- <img src="@/assets/logo.png"> class="hidden-md-and-up" -->
        <span class="text-xs-center headline">See You</span>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-layout>
</template>
<script>
export default {
  data: () => ({
    menudialog: false,
    menuItems: [
      { icon: "home", title: "Home", to:"/" },
      { icon: "room", title: "Organize a meetup", to:"/" }
    ],
    items: [
      { icon: "explore", text: "SeeYou Trips" },
      { icon: "extension", text: "More services" }
    ],
  })
}
</script>

<style scoped>
.textfild {
    line-height: 0.1px;
    border-radius: 15px;
    background-color: white;

}
</style>
