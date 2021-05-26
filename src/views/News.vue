<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <carousel />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
export default {
  components: { Carousel },
  computed: {
    list() {
      return this.$store.getters["newsmodule/newgetter"];
    },
  },
  methods: {},
  created() {
    //this.$store.dispatch("newsmodule/clear");
    this.$store.dispatch("newsmodule/getnews");
    console.log(this.$store.getters["newsmodule/newgetter"]);
  },
};
</script>

<style></style>
