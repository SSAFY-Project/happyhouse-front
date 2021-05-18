<template>
  <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7" id ="navigationbar">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>HappyHouse</v-toolbar-title>
    <v-spacer />
    <router-link to ="/">홈</router-link> |
    <router-link to ="/map">지도</router-link> |
    <router-link to ="/search">검색</router-link> |
    <router-link to ="/news">뉴스</router-link> |
    <router-link to ="/more">추가</router-link> |
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <router-link to ="/signin">
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
      { title: '로그인' },
      { title: '회원가입' },
    ],
    }
  },
}
</script>

<style>
#navigationbar{
  height: 100%;
}
</style>