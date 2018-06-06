<template>
  <div class="hidden-md-and-up">
    <!--Botoom Navigation-->
    <v-layout>
          <v-bottom-nav
            :value="true"
            active.sync
            color="white"
            fixed
            app
            dense
            class="hidden-md-and-up">
              <v-btn  color="primary" value="Home" flat :to="{ name: 'Home'}">
                <span>Home</span>
                <v-icon flat>home</v-icon>
              </v-btn>

              <v-btn flat color="primary" value="Explore" :to="{ name: 'Explore'}">
                <span>Explore</span>
                <v-icon>explore</v-icon>
              </v-btn>

              <v-btn flat color="primary" value="Profile" :to="{ name: 'Profile'}">
                <span>Me</span>
                <v-icon>person</v-icon>
              </v-btn>
          </v-bottom-nav>
    </v-layout>
  </div>
</template>
<script>
export default {
  data: () => ({

  })
}
</script>
<style scoped>
</style>
