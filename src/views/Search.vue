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
        <v-container class="detailSearch" v-if="detailOption">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header> HashTag </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-container>
                  <v-row>
                    <v-col cols="2">
                      <v-checkbox
                        label="대출 지원"
                        value="대출 지원"
                        v-model="interests"
                      />
                    </v-col>
                    <v-col cols="2">
                      <v-checkbox
                        label="주차 가능"
                        value="주차 가능"
                        v-model="interests"
                      />
                    </v-col>
                    <v-col cols="2">
                      <v-checkbox
                        label="역세권"
                        value="역세권"
                        v-model="interests"
                      />
                    </v-col>
                    <v-col cols="2">
                      <v-checkbox
                        label="공기 좋음"
                        value="공기 좋음"
                        v-model="interests"
                      />
                    </v-col>
                    <v-col cols="2">
                      <v-checkbox
                        label="펜트하우스"
                        value="펜트하우스"
                        v-model="interests"
                      />
                    </v-col>
                    <v-col cols="2">
                      <v-checkbox
                        label="옵션 1"
                        value="옵션 1"
                        v-model="interests"
                      />
                    </v-col>
                    <v-col cols="2">
                      <v-checkbox
                        label="옵션 2"
                        value="옵션 2"
                        v-model="interests"
                      />
                    </v-col>
                    <v-col cols="2">
                      <v-checkbox
                        label="옵션 3"
                        value="옵션 3"
                        v-model="interests"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-chip
            class="ma-2"
            close
            color="green"
            text-color="white"
            v-for="(item, idx) in interests"
            :key="idx"
            @click:close="interests.splice(idx, 1)"
          >
            # {{ item }}
          </v-chip>
        </v-container>
        <v-container class="searchInput" align-center>
          <v-autocomplete auto-select-first filled solo />
        </v-container>
        <v-container class="slotMachine">
          <v-row>
            <v-col>
              <dl class="slotItem" md="3">
                <dt>총 매물 수</dt>
                <number class="number" md="4" :from="0" :to="999" :duration="3"/>
              </dl>
            </v-col>
            <v-col>
              <dl class="slotItem" md="3">
                <dt>매매 수</dt>
                <number class="number" md="4" :from="0" :to="222" :duration="1.2"/>
              </dl>
            </v-col>
            <v-col>
              <dl class="slotItem" md="3">
                <dt>전세 수</dt>
                <number class="number" md="4" :from="0" :to="444" :duration="2"/>
              </dl>
            </v-col>
            <v-col>
              <dl class="slotItem" md="3">
                <dt>월세 수</dt>
                <number class="number" md="4" :from="0" :to="333" :duration="1.7"/>
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
                <h2>{{dummy1.name}}<hr></h2>
                <p>{{dummy1.price}}</p>
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
      interests: [],
      dummy1: {
        name: '래미안',
        price: '10억',
        src: "../assets/laemian.jpg"
      },
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
