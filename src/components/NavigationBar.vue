<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('showDrawer')"></v-app-bar-nav-icon>
    <v-toolbar-title />
    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab router-link to="/">HOME</v-tab>
      <v-tab router-link to="/map">MAP</v-tab>
      <v-tab router-link to="/search">SEARCH</v-tab>
      <v-tab router-link to="/news">NEWS</v-tab>
      <v-tab router-link to="/more">MORE</v-tab>
    </v-tabs>
    <toggle-button
      class="mr-4 mt-2"
      color="primary"
      @change="$vuetify.theme.dark = !$vuetify.theme.dark"
    />
    <router-link to="/signin">
      <v-btn>Sign In</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {};
</script>
