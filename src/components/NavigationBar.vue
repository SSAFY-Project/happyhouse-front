<template>
  <v-app-bar app flat>
    <v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="32" />
    
    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab>
        <router-link to ="/">HOME</router-link> 
      </v-tab>
      <v-tab>
        <router-link to ="/map">MAP</router-link>
      </v-tab>
      <v-tab>
        <router-link to ="/search">SEARCH</router-link>
      </v-tab>
      <v-tab>
        <router-link to ="/news">NEWS</router-link>
      </v-tab>
      <v-tab>
        <router-link to ="/more">MORE</router-link>
      </v-tab> 
    </v-tabs>

  <v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="32" />
  </v-app-bar>
</template>

<script>
export default {}
</script>

