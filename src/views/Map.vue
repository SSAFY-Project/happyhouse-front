<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row class="mt-4">
        <v-combobox
          v-model="sel_sido"
          :items="sido"
          label="도/광역시"
          outlined
          dense
        />
        <v-combobox
          v-model="sel_gugun"
          :items="gugun"
          label="시/구/군"
          outlined
          dense
        />
        <v-combobox
          v-model="sel_dong"
          :items="dong"
          label="동"
          outlined
          dense
        />
      </v-row>
      <v-row class="mt-2" no-gutters>
        <v-col cols="12" md="2">
          <v-card class="pa-2" outlined>아파트이름<br />크기<br />가격</v-card>
          <v-card class="pa-2" outlined>아파트이름<br />크기<br />가격</v-card>
          <v-card class="pa-2" outlined>아파트이름<br />크기<br />가격</v-card>
          <v-card class="pa-2" outlined>아파트이름<br />크기<br />가격</v-card>
        </v-col>
        <v-col cols="12" md="10">
          <div id="map" style="width: 95%; height: 700px"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
var container;
var options;
var map;
var imageSrc =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
var markers = [];
// axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
  data() {
    // return {
    //   width: 1400,
    //   height: 700,
    //   windowSize: {
    //     x: 0,
    //     y: 0,
    //   },
    //   info: false,
    //   marker: null,
    //   count: 1,
    //   map: null,
    //   isCTT: false,
    //   mapOptions: {
    //     lat: 37.39489416277346,
    //     lng: 127.11109475372076,
    //     zoom: 10,
    //     zoomControl: true,
    //     zoomControlOptions: { position: "TOP_RIGHT" },
    //     mapTypeControl: true,
    //   },
    //   initLayers: [
    //     "BACKGROUND",
    //     "BACKGROUND_DETAIL",
    //     "POI_KOREAN",
    //     "TRANSIT",
    //     "ENGLISH",
    //     "CHINESE",
    //     "JAPANESE",
    //   ],
    return {
      sido: [],
      sel_sido: ["도/광역시"],
      gugun: [],
      sel_gugun: ["시/구/군"],
      dong: [],
      sel_dong: ["동"],
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:80/map/sido")
      .then((res) => {
        for (const elem of res.data) {
          this.sido.push({
            text: elem.sidoName,
            value: elem.sidoCode,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=191e9ed1ac08eb2b442603916bf20abd&libraries=services";
      document.head.appendChild(script);
    }
  },
  watch: {
    sel_sido: function (newVal) {
      this.gugun = [];
      this.sel_gugun = ["시/구/군"];

      axios
        .get("http://127.0.0.1:80/map/gugun?sido=" + newVal.value)
        .then((res) => {
          for (const elem of res.data) {
            this.gugun.push({
              text: elem.gugunName,
              value: elem.gugunCode,
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    sel_gugun: function (newVal) {
      if (newVal.value != null) {
        this.dong = [];
        this.sel_dong = ["동"];

        axios
          .get("http://127.0.0.1:80/map/dong?gugun=" + newVal.value)
          .then((res) => {
            for (const elem of res.data) {
              this.dong.push(elem.dong);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    sel_dong: function (newVal) {
      if (newVal !== "동") {
        let address =
          this.sel_sido.text + " " + this.sel_gugun.text + " " + this.sel_dong;
        axios
          .get("http://127.0.0.1:80/map/apt?dong=" + newVal)
          .then((res) => {
            this.coder(address, res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  },
  methods: {
    initMap() {
      container = document.getElementById("map");
      options = {
        center: new kakao.maps.LatLng(35.19656853772262, 129.0807270648317),
        level: 6,
      };
      map = new kakao.maps.Map(container, options);
    },
    coder(address, data) {
      let geocoder = new kakao.maps.services.Geocoder();
      let callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          let moveLatLng = new kakao.maps.LatLng(result[0].y, result[0].x);
          let locations = [];

          for (const elem of data) {
            locations.push({
              title: elem.aptName,
              latlng: new kakao.maps.LatLng(elem.lat, elem.lng),
            });
          }

          for(const marker of markers) {
            marker.setMap(null);
          }

          for (const loc of locations) {
            let marker = new kakao.maps.Marker({
              position: loc.latlng
            })
            marker.setMap(map);
            markers.push(marker);
          }

          map.panTo(moveLatLng);
        }
      };
      geocoder.addressSearch(address, callback);
    },
    initMarker(pos) {},
  },
};
</script>
