<template>
  <div>
    <!--up Navigation large screen-->
  <v-layout>
      <v-toolbar color="primary" dense dark fixed app class="hidden-sm-and-down">
        <v-toolbar-title d-block>Trip Finder</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn  v-for="(menuItem, i) in menuItems" :key="i"  :to="menuItem.to" flat>
          <v-icon left v-html="menuItem.icon" ></v-icon>
         {{ menuItem.title }}
        </v-btn>
      </v-toolbar>
  </v-layout>

<!--up Navigation small screen-->
  <v-layout>
      <v-toolbar color="primary" dark dense fixed app flat class="hidden-md-and-up">
        <v-flex xs8>
          <v-text-field
            flat
            solo-inverted
            prepend-icon="fas fa-search"
            label="Search"
            class="textfild"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-layout>
</div>
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
