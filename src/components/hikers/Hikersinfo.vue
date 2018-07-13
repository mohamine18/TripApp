<template>
  <div >
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon :to="{name:'Profile'}">
          <v-icon >close</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >Travelers Information</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon :to="{name:'AddHikerInfo'}">
          <v-icon >person_add</v-icon>
        </v-btn>
      </v-toolbar>
    </v-container>
    <!--Travelers Information-->
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 v-for="(hiker, i) in hikers" :key="i">
           <v-card :style="{'border-radius': '5px'}" :to="{name:'editHikerInfo', params:{travid: hiker.travid}}">
             <v-list two-line >
               <v-list-tile >
                 <v-list-tile-content>
                   <v-list-tile-title class="subheading">{{ hiker.name }}</v-list-tile-title>
                   <v-list-tile-sub-title class="caption">{{ hiker.idtype }}</v-list-tile-sub-title>
                   <v-list-tile-sub-title class="caption">{{hiker.id}}</v-list-tile-sub-title>
                 </v-list-tile-content>
                 <v-list-tile-action>
                   <v-icon color="primary">chevron_right</v-icon>
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
      {travid:'01252', name:'Bouras Amine',idtype:'Passport',id:'152499721'},
      {travid:'01253', name:'Sahroui Delhim',idtype:'Passport',id:'188401721'},
      {travid:'01254', name:'Xu Yue',idtype:'Chinese ID',id:'18840172152158514879821'}
    ]
  })
}
</script>
