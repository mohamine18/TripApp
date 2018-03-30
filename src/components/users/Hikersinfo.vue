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
          <v-icon >fas fa-user-plus</v-icon>
        </v-btn>
      </v-toolbar>
    </v-container>
    <!--Travelers Information-->
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-subheader>Hikers Information:</v-subheader>
        <v-flex xs12 sm6 v-for="(hiker, i) in hikers" :key="i">
           <v-card>
             <v-list two-line >
               <v-list-tile >
                 <v-list-tile-content>
                   <v-list-tile-title>{{ hiker.name }}</v-list-tile-title>
                   <v-list-tile-sub-title>{{ hiker.idtype }}: {{ hiker.id }}</v-list-tile-sub-title>
                 </v-list-tile-content>
                 <v-list-tile-action>
                   <v-icon color="primary">keyboard_arrow_right</v-icon>
                 </v-list-tile-action>
               </v-list-tile>
             </v-list>
           </v-card>
         </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    hikers:[
      {name:'Bouras Amine',idtype:'Passport',id:'152499721'},
      {name:'Sahroui Delhim',idtype:'Passport',id:'188401721'},
      {name:'Xu Yue',idtype:'Chinese ID',id:'18840172152158514879821'}
    ]
  })
}
</script>
