<template>
  <div class="hidden-md-and-up ">
    <!--Toolbar-->
    <v-container >
      <v-toolbar color="primary" dark dense fixed  flat >
        <v-btn icon to="/User-support">
          <v-icon >fas fa-times</v-icon>
        </v-btn>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block>
          <span >FAQ</span>
        </v-toolbar-title>
      </v-toolbar>
    </v-container>
    <!--support-->
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <!--Trip Frequently-Asked-Questions-->
        <v-subheader>Questions about Trips:</v-subheader>
        <v-flex xs12 sm6 >
          <v-expansion-panel expand>
           <v-expansion-panel-content v-for="(item,i) in tripQst" :key="i">
             <div slot="header">{{ item.qst }}</div>
             <v-card>
               <v-card-text>{{ item.answer }}</v-card-text>
             </v-card>
           </v-expansion-panel-content>
         </v-expansion-panel>
         </v-flex>
         <!--Payment Frequently-Asked-Questions-->
         <v-subheader>Question about Payment:</v-subheader>
         <v-flex xs12 sm6 >
           <v-expansion-panel>
            <v-expansion-panel-content v-for="(item,i) in payQst" :key="i">
              <div slot="header">{{ item.qst }}</div>
              <v-card>
                <v-card-text>{{ item.answer }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    tripQst: [
      {qst:'why we go',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {qst:'how we go',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {qst:'why im single',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {qst:'why we study',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    ],
    payQst: [
      {qst:'why we pay',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {qst:'how we can get paid',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {qst:'why we use money',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {qst:'can we have ... using money',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    ],
  })
}
</script>
