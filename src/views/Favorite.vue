<template>
  <div>
    <v-main class="searchBar">
      <v-container>
        <v-container class="btnAry" align-center>
          <button @click="noShowDetail" class="btn">통합검색</button>
          <button @click="showDetail" class="btn">상세검색 ></button>
          <router-link to="/map">
            <button class="btn">지도검색</button>
          </router-link>
        </v-container>
        <v-container style="background-color: white" v-if="detailOption">
          <v-row>
            <!--필터 검색-->
            <v-col class="py-3" md="3">
              <p class="py-3" style="border-bottom: 1px solid gray">
                {{ detailListTitle[0] }}
              </p>
              <v-btn-toggle tile color="deep-purple accent-2" group>
                <v-btn value="apart" @click="searchBy = '아파트'"> 아파트 </v-btn>
                <v-btn value="area" @click="searchBy = '지역(동)'"> 지역(동) </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col md="3">
              <p class="py-3" style="border-bottom: 1px solid gray">
                {{ detailListTitle[1] }}
              </p>
              <v-text-field
                label="최소"
                outlined
                placeholder="최소"
                v-model="price[0]"
              ></v-text-field>
              ~
              <v-text-field label="최대" v-model="price[1]" outlined></v-text-field>
              <b-field>
                <b-slider
                  rounded
                  v-model="price"
                  type="is-success"
                  :min="0"
                  :max="9999"
                  :step="100"
                />
              </b-field>
            </v-col>
            <v-col>
              <p class="py-3" style="border-bottom: 1px solid gray">
                {{ detailListTitle[2] }}
              </p>
              <v-checkbox label="대출 지원" value="대출 지원" dense v-model="interests" />
              <v-checkbox label="주차 가능" value="주차 가능" dense v-model="interests" />
              <v-checkbox label="관리비 포함" value="관리비 포함" dense v-model="interests" />
              <v-checkbox label="도보 5분" value="도보 5분" dense v-model="interests" />
            </v-col>
            <v-col class="py-3" md="3">
              <p class="py-3" style="border-bottom: 1px solid gray">
                {{ detailListTitle[3] }}
              </p>
              <v-btn-toggle tile color="deep-purple accent-2" group>
                <v-btn
                  @click="
                    priceSort;
                    sortBy = '가격';
                  "
                >
                  가격
                </v-btn>
                <v-btn
                  @click="
                    bulidSort;
                    sortBy = '건축년도';
                  "
                >
                  건축년도
                </v-btn>
                <v-btn
                  @click="
                    reviewSort;
                    sortBy = '평점';
                  "
                >
                  평점
                </v-btn>
                <v-btn
                  @click="
                    inquirySort;
                    sortBy = '조회';
                  "
                >
                  조회
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
          <v-chip class="ma-2" color="orange" text-color="white" @click:close="searchBy = null">
            # {{ searchBy }}
          </v-chip>
          <v-chip class="ma-2" color="green" text-color="white">
            # {{ price[0] }} ~ {{ price[1] }} 만원
          </v-chip>
          <v-chip
            class="ma-2"
            close
            color="blue"
            text-color="white"
            v-for="(item, idx) in interests"
            :key="idx"
            @click:close="interests.splice(idx, 1)"
          >
            # {{ item }}
          </v-chip>
          <v-chip class="ma-2" color="purple" text-color="white"> # {{ sortBy }} </v-chip>
        </v-container>

        <v-container class="searchInput" align-center>
          <v-autocomplete auto-select-first filled solo />
        </v-container>
        <v-container class="slotMachine">
          <v-row>
            <v-col>
              <dl class="slotItem" md="3">
                <dt>총 매물 수</dt>
                <number md="4" :from="0" :to="999" :duration="3" />
              </dl>
            </v-col>
            <v-col>
              <dl class="slotItem" md="3">
                <dt>매매 수</dt>
                <number md="4" :from="0" :to="222" :duration="1.2" />
              </dl>
            </v-col>
            <v-col>
              <dl class="slotItem" md="3">
                <dt>전세 수</dt>
                <number md="4" :from="0" :to="444" :duration="2" />
              </dl>
            </v-col>
            <v-col>
              <dl class="slotItem" md="3">
                <dt>월세 수</dt>
                <number md="4" :from="0" :to="333" :duration="1.7" />
              </dl>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
    <v-main>
      <v-container class="cardList">
        <!---->
        <v-row>
          <v-col md="4" v-for="i in 9" :key="i">
            <figure class="card">
              <img src="../assets/laemian.jpg" />
              <figcaption>
                <h2>
                  {{ data.name }}
                  <hr />
                </h2>
                <p>{{ data.price }}</p>
                <div class="icons">
                  <i class="ion-android-pin"></i>
                  <i class="ion-heart" style="color: red"></i>
                  <i class="ion-android-share-alt"></i>
                </div>
              </figcaption>
            </figure>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailOption: false,
      data: {
        name: "래미안",
        price: "10억",
        src: "../assets/laemian.jpg",
      },
      detailListTitle: ["필터", "가격", "옵션", "정렬"],
      searchBy: "아파트",
      sortBy: "가격",
      price: [0, 9999],
      value: 5,
      interests: [],
    };
  },
  methods: {
    showDetail() {
      this.detailOption = true;
    },
    noShowDetail() {
      this.detailOption = false;
      this.interests = [];
    },
    priceSort() {
      this.data.price.sort();
    },
    bulidSort() {
      this.data.price.sort();
    },
    reviewSort() {
      this.data.price.sort();
    },
    inquirySort() {
      this.data.price.sort();
    },
  },
};
</script>

<style>
.searchBar {
  background-image: url("../assets/searchColor5.jpg");
  background-position: center;
  background-size: cover;
}

.btnAry {
  text-align: center;
}

.btn {
  display: inline-block;
  background: transparent;
  text-transform: uppercase;
  text-align: center;
  font-weight: 550;
  font-style: normal;
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  color: white;
  border-radius: 0;
  padding: 5px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(
    270deg,
    rgba(253, 253, 253, 0.8),
    rgba(116, 178, 203, 0.8),
    rgba(34, 34, 34, 0),
    rgba(34, 34, 34, 0)
  );
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid white;
  border-radius: 100px;
}

.btn:hover {
  color: #fff;
  border: 1px solid rgba(223, 190, 106, 0);
  color: white;
  background-position: 99% 50%;
}

.slotItem {
  font-size: 20px;
  color: white;
  border-right: 2px solid white;
}

@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,500,900);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
.card {
  font-family: "Source Sans Pro", Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 230px;
  max-width: 315px;
  max-height: 230px;
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
}
.card * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
}
.card img {
  opacity: 1;
  width: 100%;
}
.card figcaption:after,
.card figcaption:before,
.card:after,
.card:before {
  background: #0a0a0a;
  width: 25%;
  position: absolute;
  content: "";
  opacity: 0;
  -webkit-transition: all 0.2s steps(4);
  transition: all 0.2s steps(4);
  z-index: 1;
  bottom: 100%;
  top: 0;
}
.card:before {
  left: 0;
  -webkit-transition-delay: 0;
  transition-delay: 0;
}
.card:after {
  left: 25%;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.card figcaption:before {
  left: 50%;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  z-index: -1;
}
.card figcaption:after {
  left: 75%;
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
  z-index: -1;
}
.card figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 30px;
}
.card .icons,
.card h2,
.card p {
  margin: 0;
  width: 100%;
  opacity: 0;
}
.card h2 {
  font-weight: 900;
  text-transform: uppercase;
}
.card p {
  font-weight: 300;
}
.card .icons {
  position: absolute;
  bottom: 30px;
  left: 0;
  width: 100%;
}
.card i {
  padding: 0 10px;
  display: inline-block;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  opacity: 0.8;
}
.card i:hover {
  opacity: 1;
}
.card.hover figcaption:after,
.card.hover figcaption:before,
.card.hover:after,
.card.hover:before,
.card:hover figcaption:after,
.card:hover figcaption:before,
.card:hover:after,
.card:hover:before {
  bottom: 0;
  opacity: 0.8;
}
.card.hover figcaption .icons,
.card.hover figcaption h2,
.card.hover figcaption p,
.card:hover figcaption .icons,
.card:hover figcaption h2,
.card:hover figcaption p {
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}
.card.hover figcaption .icons,
.card.hover figcaption h2,
.card:hover figcaption .icons,
.card:hover figcaption h2 {
  opacity: 1;
}
.card.hover figcaption p,
.card:hover figcaption p {
  opacity: 0.7;
}
</style>
