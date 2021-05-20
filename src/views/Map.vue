<template>
  <v-main>
    <naver-maps
      :height="height"
      :width="width"
      :mapOptions="mapOptions"
      :initLayers="initLayers"
      @load="onLoad"
			class="mt-4"
    >
      <naver-info-window
        class="info-window"
        @load="onWindowLoad"
        :isOpen="info"
        :marker="marker"
      >
        <div class="info-window-container">
          <h1>{{ markerInfo }}</h1>
        </div>
      </naver-info-window>
      <naver-marker
        :lat="37.39489416277346"
        :lng="127.11109475372076"
        @click="onMarkerClicked"
        @load="onMarkerLoaded"
      />
    </naver-maps>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      width: 800,
      height: 800,
      info: false,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      mapOptions: {
        lat: 37,
        lng: 127,
        zoom: 10,
        zoomControl: true,
        zoomControlOptions: { position: "TOP_RIGHT" },
        mapTypeControl: true,
      },
      initLayers: [
        "BACKGROUND",
        "BACKGROUND_DETAIL",
        "POI_KOREAN",
        "TRANSIT",
        "ENGLISH",
        "CHINESE",
        "JAPANESE",
      ],
    };
  },
  computed: {
      markerInfo() {
        return `마커 상세내용`;
      }
    },
  methods: {
    onLoad(vue) {
      this.map = vue;
    },
    onWindowLoad() {},
    onMarkerClicked() {
      this.info = !this.info;
    },
    onMarkerLoaded(vue) {
      this.marker = vue.marker;
    },
  },
};
</script>
<style scoped>
.info-window-container {
  padding: 10px;
  width: 300px;
  height: 100px;
}
</style>
