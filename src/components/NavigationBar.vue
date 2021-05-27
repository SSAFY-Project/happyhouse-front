<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="$emit('showDrawer')"></v-app-bar-nav-icon>
    <v-col cols="1" class="pl-0">
      <router-link to="/">
        <v-img src="@/assets/HomeLogo.jpeg" max-width="100%" />
      </router-link>
    </v-col>
    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab router-link to="/">HOME</v-tab>
      <v-tab router-link to="/map">MAP</v-tab>
      <v-tab router-link to="/search">SEARCH</v-tab>
      <v-tab router-link to="/news">NEWS</v-tab>
      <!-- <v-tab router-link to="/more">MORE</v-tab> -->
    </v-tabs>
    <toggle-button
      class="mr-4 mt-2"
      color="primary"
      @change="$vuetify.theme.dark = !$vuetify.theme.dark"
    />
    <router-link to="/signin">
      <v-btn v-if="this.$store.state.userInfo === null">Sign In</v-btn>
    </router-link>
    <v-btn v-if="this.$store.state.userInfo !== null" v-on:click="out"
      >Sign Out</v-btn
    >
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isLogin: this.$store.getters.getLogin,
    };
  },
  computed: {
    check_isLogin() {
      return this.$store.getters.getLogin;
    },
  },
  watch: {
    check_isLogin(val) {
      this.isLogin = val;
    },
  },
  methods: {
    ...mapActions(["logout"]),
    out() {
      this.logout().then((res) => {
        alert(res);
      });
    },
  },
};
</script>
