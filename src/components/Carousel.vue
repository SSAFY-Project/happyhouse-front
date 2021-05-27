<template>
  <div>
    <v-carousel height="100vh" v-model="model">
      <v-carousel-item v-for="news in list" :key="news.title">
        <v-img :src="news.image" height="100%" tile="tile">
          <v-row class="fill-height" align="center" justify="center">
            <div
              @click="gotoNews(news.link)"
              style="padding-left: 50px; padding-right: 50px; font-size: 50px"
            >
              {{ news.title }}
            </div>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.getters["newsmodule/newgetter"];
    },
  },
  data() {
    return {
      model: 0,
    };
  },
  methods: {
    gotoNews(link) {
      window.open(link);
    },
  },
};
</script>
<style>
@font-face {
  font-family: BMJUA;
  src: url("../font/BMJUA_ttf.ttf");
}

body > * {
  font-family: BMJUA !important;
}
</style>
