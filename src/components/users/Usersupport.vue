<template>
  <div >
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/Profile">
          <v-icon >close</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >Customer Support</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-container>
    <!--support-->
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 >
           <v-card  :to="{name: 'Faq'}">
             <v-list >
               <v-list-tile >
                 <v-list-tile-content>
                   <v-list-tile-title>Frequently Asked Questions</v-list-tile-title>
                 </v-list-tile-content>
                 <v-list-tile-action>
                   <v-icon color="primary">keyboard_arrow_right</v-icon>
                 </v-list-tile-action>
               </v-list-tile>
             </v-list>
           </v-card>
         </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 >
           <v-card  >
             <v-list two-line >
               <v-list-tile>
                 <v-list-tile-action>
                   <v-icon color="primary">chat</v-icon>
                 </v-list-tile-action>
                 <v-list-tile-content>
                   <v-list-tile-title>Service chat</v-list-tile-title>
                   <v-list-tile-sub-title>9:00 - 18:00 (BJ Time), 7 Days a Week</v-list-tile-sub-title>
                 </v-list-tile-content>
               </v-list-tile>
               <v-card-media src="https://www.qrstuff.com/images/default_qrcode.png" height="175px" contain>
               </v-card-media><br>
               <v-divider inset></v-divider>
               <v-list-tile>
                 <v-list-tile-action>
                   <v-icon color="primary">phone</v-icon>
                 </v-list-tile-action>
                 <v-list-tile-content>
                   <v-list-tile-title>(86) 188-1145-4745</v-list-tile-title>
                   <v-list-tile-sub-title>Beijing</v-list-tile-sub-title>
                 </v-list-tile-content>
               </v-list-tile>
               <v-list-tile>
                 <v-list-tile-action></v-list-tile-action>
                 <v-list-tile-content>
                   <v-list-tile-title>(86) 156-2647-5354</v-list-tile-title>
                   <v-list-tile-sub-title>Guangzhou</v-list-tile-sub-title>
                 </v-list-tile-content>
               </v-list-tile>
               <v-divider inset></v-divider>
               <v-list-tile>
                 <v-list-tile-action>
                   <v-icon color="primary">mail</v-icon>
                 </v-list-tile-action>
                 <v-list-tile-content>
                   <v-list-tile-title>sales@seeyou.com</v-list-tile-title>
                   <v-list-tile-sub-title>Sales Departement</v-list-tile-sub-title>
                 </v-list-tile-content>
               </v-list-tile>
               <v-list-tile>
                 <v-list-tile-action></v-list-tile-action>
                 <v-list-tile-content>
                   <v-list-tile-title>tripplan@seeyou.com</v-list-tile-title>
                   <v-list-tile-sub-title>Trips Departement</v-list-tile-sub-title>
                 </v-list-tile-content>
               </v-list-tile>
               <v-divider inset></v-divider>
               <v-list-tile>
                 <v-list-tile-action>
                   <v-icon color="primary">location_on</v-icon>
                 </v-list-tile-action>
                 <v-list-tile-content>
                   <v-list-tile-title>1400 College Street</v-list-tile-title>
                   <v-list-tile-sub-title>Haidian, BJ 10050, China</v-list-tile-sub-title>
                 </v-list-tile-content>
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

  })
}
</script>
