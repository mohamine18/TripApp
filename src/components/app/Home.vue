<template>
<!-- class="hidden-md-and-up" -->
<div>
    <v-content>
      <component v-bind:is="'navline'"></component>
      <component v-bind:is="'trip-list'"></component>
      <component v-bind:is="'buttom-nav'"></component>
    </v-content>
</div>
</template>

<script>
import TripList from '@/components/trips/TripList'
import navline from '@/components/app/navline'
import Buttomnav from '@/components/app/Buttomnav'
export default {
  data: () => ({

  }),
  components:{
    'trip-list': TripList,
    'navline': navline,
    'buttom-nav': Buttomnav
  }
};
</script>
