<template>
  <div class="hidden-md-and-up ">
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/hikers-info">
          <v-icon >fas fa-times</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span ></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon to="#">
          <v-icon >fas fa-check</v-icon>
        </v-btn>
      </v-toolbar>
    </v-container>
    <!--Profile items-->
    <v-layout row justify-center>

      <v-card flat class="grey lighten-5">
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-subheader>Please enter the hiker's information as it appears on their ID.</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Surename (Last name)" required prepend-icon="far fa-user" v-model="userfirstname"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Given names (first &amp; middle name)" required prepend-icon="fas fa-minus " v-model="userlastname"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="ID type"
                  required
                  :items="['Passport', 'Mainland Chinese ID']"
                  prepend-icon="fas fa-id-card"
                  v-model="idtype"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="ID number" required prepend-icon="fas fa-minus " v-model="idnumer"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Gender"
                  required
                  :items="['Male', 'Female']"
                  prepend-icon="fas fa-venus-mars"
                  v-model="usergender"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Country"
                  required
                  :items="['Algeria', 'China', 'France']"
                  prepend-icon="fas fa-globe"
                  cache-items
                  autocomplete
                  v-model="usercountry"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      </v-card>
    </v-layout>
  </div>
</template>
<script>
export default {
  data: () => ({
    userfirstname:'',
    userlastname : '',
    idtype : '',
    idnumer : '',
    usergender : '',
    usercountry : '',
  })
}
</script>
<stylescoped>
</style>
