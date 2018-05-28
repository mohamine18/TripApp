<template>
  <v-layout>
   <v-flex xs12 sm6 offset-sm3>
     <v-card flat>
       <v-card-media
         class="white--text"
         height="200px"
         src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524999100247&di=76acce1c90050cb2b1d8a2807e5dd5bb&imgtype=0&src=http%3A%2F%2Fmedia.ceetiz.com%2Factivity%2FBMIPEK011%2Fthumbnails%2F642x450%2Fmutianyu-3.jpg"
       >
         <v-container fill-height fluid>
           <v-layout fill-height>
             <v-flex xs12 align-end flexbox>
               <v-btn icon color="primary" :to="'/Explore/'+$route.params.cityname">
                 <v-icon  >keyboard_arrow_left</v-icon>
               </v-btn>
             </v-flex>
           </v-layout>
         </v-container>
       </v-card-media>
       <v-card-title>
         <div>
           <span> <h2> {{$route.params.name}} </h2> </span>
           <span>The magice of hard working</span>
         </div>
       </v-card-title>
       <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
       </v-card-text>
     </v-card>
   </v-flex>
 </v-layout>
 </v-container>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style scoped>
</style>
