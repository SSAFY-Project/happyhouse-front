<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row class="mt-4">
        <v-combobox v-model="sel_sido" :items="sido" label="도/광역시" outlined dense />
        <v-combobox v-model="sel_gugun" :items="gugun" label="시/구/군" outlined dense />
        <v-combobox v-model="sel_dong" :items="dong" label="동" outlined dense />
      </v-row>
      <v-row class="mt-2" no-gutters>
        <v-col cols="12" md="4">
          <v-flex v-for="item in this.sel_apt" :key="item.data.id">
            <v-card style="border: 1px solid grey" height="20vh" max-width="100%">
              <v-container>
                <v-row>
                  <v-col md="4">
                    <v-img
                      height="16vh"
                      width="30vw"
                      :src="images.sample"
                      style="border-radius: 10px"
                    ></v-img>
                  </v-col>
                  <v-col md="8">
                    <v-list-item-title class="mb-2"
                      >{{ item.data.aptName }}
                      <v-btn icon @click="add_favorite(item)">
                        <v-icon v-if="!item.favor">mdi-heart-outline</v-icon>
                        <v-icon v-if="item.favor" style="color: red">mdi-heart</v-icon>
                      </v-btn>
                    </v-list-item-title>
                    <v-list-item dense class="ml-0 pl-0">
                      평수 : {{ item.data.area }}평<br />
                      층수 : {{ item.data.floor }}층<br />
                      매매가 : {{ item.data.dealAmount }}억 원
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-flex>
        </v-col>
        <v-col cols="12" md="8">
          <div id="map" style="width: 95%; height: 700px"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
//axios 통신 위한 axios 모듈 import
import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:80';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
//kakao map 관련 전역변수
var container;
var options;
var map;
var markers = [];
var selectedMarker = null;

var MARKER_WIDTH = 33, // 기본, 클릭 마커의 너비
  MARKER_HEIGHT = 36, // 기본, 클릭 마커의 높이
  OFFSET_X = 12, // 기본, 클릭 마커의 기준 X좌표
  OFFSET_Y = MARKER_HEIGHT, // 기본, 클릭 마커의 기준 Y좌표
  OVER_MARKER_WIDTH = 40, // 오버 마커의 너비
  OVER_MARKER_HEIGHT = 42, // 오버 마커의 높이
  OVER_OFFSET_X = 13, // 오버 마커의 기준 X좌표
  OVER_OFFSET_Y = OVER_MARKER_HEIGHT, // 오버 마커의 기준 Y좌표
  SPRITE_MARKER_URL =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markers_sprites2.png", // 스프라이트 마커 이미지 URL
  SPRITE_WIDTH = 126, // 스프라이트 이미지 너비
  SPRITE_HEIGHT = 146, // 스프라이트 이미지 높이
  SPRITE_GAP = 10; // 스프라이트 이미지에서 마커간 간격

var markerSize, // 기본, 클릭 마커의 크기
  markerOffset, // 기본, 클릭 마커의 기준좌표
  overMarkerSize, // 오버 마커의 크기
  overMarkerOffset, // 오버 마커의 기준 좌표
  spriteImageSize; // 스프라이트 이미지의 크기

// axios 통신시 origin 오류 해결 위한 코드
// axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
  data() {
    return {
      //시도, 구군, 동, 선택된 마커에 대한 데이터 바인딩
      sido: [],
      sel_sido: ["도/광역시"],
      gugun: [],
      sel_gugun: ["시/구/군"],
      dong: [],
      sel_dong: ["동"],
      sel_apt: [],
      locations: [],
      selection: 1,
      images: {
        sample: "",
      },
      favorite: false,
    };
  },
  created() {
    //인스턴스 생성시에 be와 통신해서 시도 리스트 가져온다
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
    //마운트 되면 kakaomap init
    if (window.kakao && window.kakao.maps) {
      //kakaomap 이미 존재하는 경우에는 단순히 init만
      this.initMap();
    } else {
      //그 외의 처음 경우에는 script cdn으로 가져와서 head에 추가
      const script = document.createElement("script");
      script.onload = () => new kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=191e9ed1ac08eb2b442603916bf20abd&libraries=services";
      document.head.appendChild(script);
    }
  },
  watch: {
    //시/도 선택시에 vcombobox를 통해 변경되는 sel_sido 데이터에 대한 감시
    sel_sido: function (newVal) {
      this.gugun = [];
      this.sel_gugun = ["시/구/군"];

      //데이터의 값이 변경되면 해당 시/도에 따른 시/구/군 리스트 가져온다
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
    //시/구/군에 대해서 동일하게 처리, => 동 가져옴
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
    //동 선택시
    sel_dong: function (newVal) {
      if (newVal !== "동") {
        let address = this.sel_sido.text + " " + this.sel_gugun.text + " " + this.sel_dong;

        //해당 동의 아파, 주택 정보 be와 통신
        axios
          .get("http://127.0.0.1:80/map/apt?dong=" + newVal)
          .then((res) => {
            //coder method 호출
            this.coder(address, res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    sel_apt: function (newVal) {
      console.log(newVal);
    },
    locations: function (newVal) {
      for (let i = 0, len = newVal.length; i < len; i++) {
        let gapX = MARKER_WIDTH + SPRITE_GAP, // 스프라이트 이미지에서 마커로 사용할 이미지 X좌표 간격 값
          originY = (MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 기본, 클릭 마커로 사용할 Y좌표 값
          overOriginY = (OVER_MARKER_HEIGHT + SPRITE_GAP) * i, // 스프라이트 이미지에서 오버 마커로 사용할 Y좌표 값
          normalOrigin = new kakao.maps.Point(0, originY), // 스프라이트 이미지에서 기본 마커로 사용할 영역의 좌상단 좌표
          clickOrigin = new kakao.maps.Point(gapX, originY), // 스프라이트 이미지에서 마우스오버 마커로 사용할 영역의 좌상단 좌표
          overOrigin = new kakao.maps.Point(gapX * 2, overOriginY); // 스프라이트 이미지에서 클릭 마커로 사용할 영역의 좌상단 좌표

        // 마커를 생성하고 지도위에 표시합니다
        this.addMarker(
          newVal[i].position,
          newVal[i].aptName,
          normalOrigin,
          overOrigin,
          clickOrigin
        );
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
      (markerSize = new kakao.maps.Size(MARKER_WIDTH, MARKER_HEIGHT)), // 기본, 클릭 마커의 크기
        (markerOffset = new kakao.maps.Point(OFFSET_X, OFFSET_Y)), // 기본, 클릭 마커의 기준좌표
        (overMarkerSize = new kakao.maps.Size(OVER_MARKER_WIDTH, OVER_MARKER_HEIGHT)), // 오버 마커의 크기
        (overMarkerOffset = new kakao.maps.Point(OVER_OFFSET_X, OVER_OFFSET_Y)), // 오버 마커의 기준 좌표
        (spriteImageSize = new kakao.maps.Size(SPRITE_WIDTH, SPRITE_HEIGHT)); // 스프라이트 이미지의 크기
    },
    //동까지 다 선택한 후에 호출되는 함수
    coder(address, data) {
      //카카오맵 api를 이용해서 해당 동의 중심좌표로 화면 이동 및 먀커, 마커의 클릭이벤트 처리

      //geocoder 서비스 이용위해서는 cdn에 services 파라미터 입력 필요
      let geocoder = new kakao.maps.services.Geocoder();

      //geocoder를 통해 검색된 현재 동의 중심 위도 경도(result)를 가지고 수행하는 콜백 함수
      let callback = (result, status) => {
        //status 200인 경우에만
        if (status === kakao.maps.services.Status.OK) {
          let moveLatLng = new kakao.maps.LatLng(result[0].y, result[0].x);

          //marker locations 초기화
          this.locations = [];

          //넘어온 아파트 정보들에 대해 locations에 다 넣어줌
          for (const elem of data) {
            this.locations.push({
              aptName: elem.aptName,
              position: new kakao.maps.LatLng(elem.lat, elem.lng),
            });
          }

          //기존에 존재하는 marker 지우기
          for (const marker of markers) {
            marker.setMap(null);
          }

          //지도 부드러운 이동
          map.panTo(moveLatLng);
        }
      };

      geocoder.addressSearch(address, callback);
    },
    addMarker(position, aptName, normalOrigin, overOrigin, clickOrigin) {
      // 기본 마커이미지, 오버 마커이미지, 클릭 마커이미지를 생성합니다
      let normalImage = this.createMarkerImage(markerSize, markerOffset, normalOrigin),
        overImage = this.createMarkerImage(overMarkerSize, overMarkerOffset, overOrigin),
        clickImage = this.createMarkerImage(markerSize, markerOffset, clickOrigin);

      // 마커를 생성하고 이미지는 기본 마커 이미지를 사용합니다
      let marker = new kakao.maps.Marker({
        map: map,
        position: position,
        title: aptName,
        image: normalImage,
      });

      //markers 배열에 생성된 marker 주입
      markers.push(marker);

      // 마커 객체에 마커아이디와 마커의 기본 이미지를 추가합니다
      marker.normalImage = normalImage;

      // 마커에 mouseover 이벤트를 등록합니다
      new kakao.maps.event.addListener(marker, "mouseover", () => {
        // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
        // 마커의 이미지를 오버 이미지로 변경합니다
        if (!selectedMarker || selectedMarker !== marker) {
          marker.setImage(overImage);
        }
      });

      // 마커에 mouseout 이벤트를 등록합니다
      new kakao.maps.event.addListener(marker, "mouseout", () => {
        // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
        // 마커의 이미지를 기본 이미지로 변경합니다
        if (!selectedMarker || selectedMarker !== marker) {
          marker.setImage(normalImage);
        }
      });

      // 마커에 click 이벤트를 등록합니다
      new kakao.maps.event.addListener(marker, "click", () => {
        // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
        // 마커의 이미지를 클릭 이미지로 변경합니다
        if (!selectedMarker || selectedMarker !== marker) {
          // 클릭된 마커 객체가 null이 아니면
          // 클릭된 마커의 이미지를 기본 이미지로 변경하고
          !!selectedMarker && selectedMarker.setImage(selectedMarker.normalImage);

          // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
          marker.setImage(clickImage);
        }

        // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
        selectedMarker = marker;

        axios
          .get("http://localhost/search/markerlist?dong=" + this.sel_dong + "&aptName=" + marker.Fb)
          .then((res) => {
            this.sel_apt = [];
            for (const data of res.data.markerList) {
              // data.img = "../assets/aptImgs/" + data.aptName + ".jpg";
              // data.img = "@/assets/aptImgs" + data.aptName + ".jpg";
              this.sel_apt.push({ data: data, favor: false });
            }
            this.images.sample = require("../assets/aptImgs/" +
              res.data.markerList[0].aptName +
              ".jpg");
          });
      });
    },
    createMarkerImage(markerSize, offset, spriteOrigin) {
      let markerImage = new kakao.maps.MarkerImage(
        SPRITE_MARKER_URL, // 스프라이트 마커 이미지 URL
        markerSize, // 마커의 크기
        {
          offset: offset, // 마커 이미지에서의 기준 좌표
          spriteOrigin: spriteOrigin, // 스트라이프 이미지 중 사용할 영역의 좌상단 좌표
          spriteSize: spriteImageSize, // 스프라이트 이미지의 크기
        }
      );

      return markerImage;
    },
    add_favorite(item) {
      item.favor = !item.favor;
      const data = {
        userId: this.$store.state.userInfo.userId,
        housedealId: item.data.no,
      };

      const headers = {
        "X-AUTH-TOKEN": this.$store.state.userInfo.userToken,
      };
      console.log(this.$store.state.userInfo.userToken);
      axios.post("http://localhost/favorite/insertFav", data, {
        headers: headers,
      });
      // axios
      //   .post("http://localhost/favorite/insertFav", {
      //     data: {
      //       userId: this.$store.state.userInfo.userId,
      //       housedealId: item.data.no,
      //     },
      //     headers: {
      //       "X-AUTH-TOKEN": this.$store.state.userInfo.userToken,
      //     },
      //   })
      //   .then((result) => {
      //     console.log(result);
      //   });
    },
    reserve() {
      this.loading = true;

      this.seTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
