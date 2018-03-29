<template>
  <div class="hidden-md-and-up ">
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/">
          <v-icon >fas fa-times</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >Edit Profile</span>
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
                <v-text-field label="First name" required prepend-icon="far fa-user" v-model="userfirstname"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Last name" required prepend-icon="far " v-model="userlastname"></v-text-field>
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
                <v-menu
                  ref="menu"
                  lazy
                  :close-on-content-click="false"
                  v-model="menu"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="Birthday date"
                    v-model="date"
                    prepend-icon="fas fa-birthday-cake"
                    readonly
                  ></v-text-field>
                  <v-date-picker
                    ref="picker"
                    v-model="userbirthday"
                    @change="save"
                    min="1950-01-01"
                    :max="new Date().toISOString().substr(0, 10)"
                  ></v-date-picker>
                </v-menu>
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
              <v-flex xs12 sm6>
                <v-select
                  label="Interests"
                  multiple
                  autocomplete
                  chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  prepend-icon="fas fa-fire"
                  v-model="userinterest"
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
    date: null,
    menu: false,
    userfirstname:'',
    userlastname : '',
    usergender : '',
    userbirthday : '',
    usercountry : '',
    userinterest : []
  }),
  watch: {
    menu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>
<stylescoped>
</style>
