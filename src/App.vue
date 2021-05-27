<template>
  <v-app class="app" id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-container class="userImg">
        <img class="profileImg" src="./assets/guestImg.png" />
      </v-container>
      <v-list-item align-center>
        <v-list-item-content>
          <v-list-item-title
            class="title"
            v-if="this.$store.state.userInfo === null"
          >
            게스트 / Guest
          </v-list-item-title>
          <v-list-item-title
            class="title"
            v-if="this.$store.state.userInfo !== null"
          >
            {{ this.$store.state.userInfo.userName }} /
            {{ this.$store.state.userInfo.userRole }}
          </v-list-item-title>
          <v-list-item-subtitle v-if="this.$store.state.userInfo !== null">
            {{ this.$store.state.userInfo.userEmail }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav>
        <v-list-item
          router-link
          to="/manager"
          v-if="
            this.$store.state.userInfo !== null &&
            this.$store.state.userInfo.userRole === 'ROLE_ADMIN'
          "
        >
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>회원 관리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="checkUserFavorite">
          <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>관심 지역</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="checkUserInfo">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>회원 정보 수정</v-list-item-title>
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
      userInfo: {
        userName: "게스트",
        userRole: "guest",
        userEmail: "",
      },
    };
  },
  methods: {
    showDrawer() {
      this.drawer = !this.drawer;
    },
    checkUserFavorite() {
      if (this.$store.state.userInfo === null) {
        alert("로그인 후 이용하세요.");
        window.location.href = "/signin";
      } else {
        this.$router.push("/favorite");
      }
    },
    checkUserInfo() {
      if (this.$store.state.userInfo === null) {
        alert("로그인 후 이용하세요.");
        window.location.href = "/signin";
      } else {
        this.$router.push("/useredit");
      }
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
