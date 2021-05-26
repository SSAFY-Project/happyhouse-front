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

      <div class="section">
        <h1>지도 화면단</h1>
      </div>

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
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec", "#fec401", "#41b883"],
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
</style>
