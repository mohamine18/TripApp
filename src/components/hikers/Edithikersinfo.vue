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
                <v-radio-group v-model="usergender" row prepend-icon="fas fa-venus-mars" >
                  <v-radio label="Male" value="male" color="primary"></v-radio>
                  <v-radio label="Female" value="female" color="primary"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 sm6>
                <v-dialog scrollable max-width="300px"
                  lazy
                  persistent
                  v-model="countrymenu"
                  full-width
                >
                  <v-text-field
                    slot="activator"
                    label="Country"
                    v-model="usercountry"
                    prepend-icon="fas fa-globe"
                    readonly
                  ></v-text-field>
                  <v-card>
                    <v-card-title>Select Country</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 300px;">
                      <v-radio-group v-model="usercountry" >
                        <v-radio v-for="elem in countries" :key="elem" :label="elem" :value="elem" color="primary"></v-radio>
                      </v-radio-group>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" flat @click.native="countrymenu = false">Done</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>
              <v-flex xs12 sm6>
                <v-btn block color="primary" dark outline>Delete</v-btn>
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
    countrymenu: false,
    userfirstname:'BOURAS',
    userlastname : 'Mohammed Amine',
    idtype : 'Passport',
    idnumer : '152499721',
    usergender : 'male',
    usercountry : 'Algeria',
    countries : ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands']
  })
}
</script>
<stylescoped>
</style>
