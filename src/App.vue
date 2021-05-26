<template>
  <v-app class="app" id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-container class="userImg">
        <img class="profileImg" src="./assets/profile.jpg" />
      </v-container>
      <v-list-item align-center>
        <v-list-item-content>
          <v-list-item-title class="title">
            김찬호 님 / admin
          </v-list-item-title>
          <v-list-item-subtitle> kimhae@chengnyeon.com </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>회원 관리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>관심 지역</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>회원 정보</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <NavigationBar @showDrawer="showDrawer()" />
    <router-view />
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    showDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

.userImg {
  width: 50%;
  padding-top: 100%;
  overflow: hidden;
}
.profileImg {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
}
</style>
