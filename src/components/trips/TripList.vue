<template>
<div>
    <!--up Navigation large screen-->
  <v-layout>
      <v-toolbar color="primary" dense dark fixed app class="hidden-sm-and-down">
        <v-toolbar-title d-block>Find Trip</v-toolbar-title>
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
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" d-block> 
          <span >Find Trip</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y >
          <v-btn icon slot="activator">
            <v-icon>apps</v-icon>
          </v-btn>
          <v-card>
            <v-list>
              <v-list-tile v-for="(item, i) in items" :key="i" @click="" value="true">
                <v-list-tile-action>
                  <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.text"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-switch v-model="switchcolor" color="primary"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Switch to dark theme</v-list-tile-title>
            </v-list-tile>
          </v-list>
          </v-card>
          </v-menu>
          <v-btn icon @click="">
          <v-badge overlap color="secondary">
            <span slot="badge">6</span>
            <v-icon >notifications</v-icon>
          </v-badge>
        </v-btn>
      </v-toolbar>
</v-layout>

<!-- Menu Dialogue-->
<v-layout>
      <v-dialog v-model="menudialog" width="250px">
        <v-card>
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in items"
            :key="i"
            @click=""
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.text"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list> 
        </v-card>
      </v-dialog>
</v-layout>

<!--content -->
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="http://cdn0.wideopencountry.com/wp-content/uploads/2017/05/adobe-793x526.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        switchcolor: false,
        menudialog: false,
        menuItems: [
          { icon: "home", title: "Home", to:"/" },
          { icon: "room", title: "Organize a meetup", to:"/" }
        ],
        items: [
          { icon: "explore", text: "SeeYou Trips" },
          { icon: "extension", text: "More services" }
        ],
      }
    }
  }
</script>