<template>
<div class="hidden-md-and-up">

    <v-content>
      <component v-bind:is="'tool-bare'"></component>
      <component v-bind:is="'trip-list'"></component>
      <component v-bind:is="'buttom-nav'"></component>
    </v-content>
</div>
</template>

<script>
import TripList from '@/components/trips/TripList'
import Toolbare from '@/components/app/Toolbare'
import Buttomnav from '@/components/app/Buttomnav'
export default {
  data: () => ({

  }),
  components:{
    'trip-list': TripList,
    'tool-bare': Toolbare,
    'buttom-nav': Buttomnav
  }
};
</script>
