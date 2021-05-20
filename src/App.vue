<template>
  <v-app>
    <NavigationBar />
    <router-view />
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
export default {
  name: "App",
  components: {
    NavigationBar,
  },
}
</script>

<style></style>