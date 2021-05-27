<template>
  <div>
    <full-page :options="options" id="fullpage">
      <div class="section" id="section1">
        <div
          class="w3-display-topleft w3-padding-large w3-xlarge"
          :style="`color:white`"
        >
          SSAFY
        </div>
        <div class="w3-display-middle">
          <p
            class="w3-jumbo w3-animate-top"
            style="color: white; margin-bottom: 0px"
          >
            HAPPY HOUSE
          </p>
          <hr
            class="w3"
            style="border: 0.1px solid white; margin: auto; width: 48%"
          />
        </div>
        <div
          class="w3-display-bottomleft w3-padding-large"
          :style="`color:white`"
        >
          Made by
          <a href="https://github.com/woongseob12" target="_blank">웅섭 </a>
          <a href="https://github.com/donggillee-dev" target="_blank">동길 </a>
          <a href="https://github.com/SujinJeong" target="_blank">수진 </a>
        </div>
      </div>

      <v-main class="section">
        <v-row style="height: 100vh">
          <v-col md="6">

            <div class="wrap">
              <strong>해피하우스는</strong>
              <br>
              지역별 검색 가능~
              <br>
              <button class="button">Submit</button>
            </div>
          </v-col>
          <v-col md="6" style="background-color: yellow">
            오른쪽
            <v-row>
              <v-col md="1"></v-col>
              <v-col md="5">
                <ul>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                </ul>
              </v-col>
              <v-col md="1"></v-col>
              <v-col md="5">
                <ul>
                  <li>2</li>
                  <li>2</li>
                  <li>2</li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-main>

      <div class="section">
        <h1>검색 화면단</h1>
      </div>

      <div class="section">
        <h1>뉴스 화면단</h1>
      </div>

      <div class="section">
        <div class="slide">
          <h1>추가기능 1</h1>
        </div>
        <div class="slide">
          <h1>추가기능 2</h1>
        </div>
        <div class="slide">
          <h1>추가기능 3</h1>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        afterLoad: this.afterLoad,
        scrollBar: false,
        menu: "#menu",
        navigation: true,
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        sectionsColor: ["#41b883", "#ffffff", "#0798ec", "#fec401", "#41b883"],
      },
    };
  },
};
</script>

<style>
#section1 {
  background-image: url("../assets/HomeScreen.jpg");
  background-position: center;
  background-size: cover;
}

.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  width: 140px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  }

.button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>
