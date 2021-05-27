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
        <div class="w3-display-middle"></div>
        <div
          class="w3-display-bottomleft w3-padding-large"
          :style="`color:white`"
        >
          Made by
          <a href="https://github.com/woongseob12" target="_blank">웅섭 </a>
          <a href="https://github.com/donggillee-dev" target="_blank">동길 </a>
          <a href="https://github.com/SujinJeong" target="_blank">수진 </a>
          <a href="" target="_blank">성민 </a>
        </div>
      </div>

      <v-main class="section">
        <v-row style="height: 100vh">
          <v-col md="6">
            <v-row>
              <v-col md="4"></v-col>
              <v-col md="4" style="margin-top: 200px">
                <v-container style="text-align: left">
                  <strong>저희 프로젝트는</strong>
                </v-container>
                <br />
                <v-container style="text-align: left">
                  <span class="startWord">
                    지역별 검색과<br />상세 검색
                    <span class="endWord"
                      >을 통해<br />좋은 집을<br />
                      구해드립니다.<br /><br
                    /></span>
                  </span>
                  <br />
                </v-container>
                <div class="wrap">
                  <router-link to="/search">
                    <button class="button">검색하기</button>
                  </router-link>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="right_box" md="6">
            <v-row>
              <ul class="imgSlide">
                <li>
                  <img class="imgBox" src="@/assets/상암동.jpg" />
                  <span class="imgWord">상암동 MBC</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/가로수길.png" />
                  <span class="imgWord">가로수길</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/용산.jpg" />
                  <span class="imgWord">남산타워</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/잠실.jpg" />
                  <span class="imgWord">석촌호수</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/상암동.jpg" />
                  <span class="imgWord">상암동 MBC</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/가로수길.png" />
                  <span class="imgWord">가로수길</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/용산.jpg" />
                  <span class="imgWord">남산타워</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/잠실.jpg" />
                  <span class="imgWord">석촌호수</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/상암동.jpg" />
                  <span class="imgWord">상암동 MBC</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/가로수길.png" />
                  <span class="imgWord">가로수길</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/용산.jpg" />
                  <span class="imgWord">남산타워</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/잠실.jpg" />
                  <span class="imgWord">석촌호수</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/상암동.jpg" />
                  <span class="imgWord">상암동 MBC</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/가로수길.png" />
                  <span class="imgWord">가로수길</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/용산.jpg" />
                  <span class="imgWord">남산타워</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/잠실.jpg" />
                  <span class="imgWord">석촌호수</span>
                </li>
              </ul>
              <ul class="imgSlide">
                <li>
                  <img class="imgBox" src="@/assets/판교.jpg" />
                  <span class="imgWord">판교</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/정자.jpg" />
                  <span class="imgWord">정자</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/창덕궁.jpg" />
                  <span class="imgWord">창덕궁</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/보성 녹차.jpg" />
                  <span class="imgWord">보성 녹차밭</span>
                </li>
                <li></li>
                <li>
                  <img class="imgBox" src="@/assets/판교.jpg" />
                  <span class="imgWord">판교</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/정자.jpg" />
                  <span class="imgWord">정자</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/창덕궁.jpg" />
                  <span class="imgWord">창덕궁</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/보성 녹차.jpg" />
                  <span class="imgWord">보성 녹차밭</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/판교.jpg" />
                  <span class="imgWord">판교</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/정자.jpg" />
                  <span class="imgWord">정자</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/창덕궁.jpg" />
                  <span class="imgWord">창덕궁</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/보성 녹차.jpg" />
                  <span class="imgWord">보성 녹차밭</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/판교.jpg" />
                  <span class="imgWord">판교</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/정자.jpg" />
                  <span class="imgWord">정자</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/창덕궁.jpg" />
                  <span class="imgWord">창덕궁</span>
                </li>
                <li>
                  <img class="imgBox" src="@/assets/보성 녹차.jpg" />
                  <span class="imgWord">보성 녹차밭</span>
                </li>
              </ul>
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
  background-image: url("../assets/HomeScreen.jpeg");
  background-position: center;
  background-size: cover;
}

.wrap {
  height: 100%;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
}

.button {
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2.5px;
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
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

.right_box {
  overflow: hidden;
}

ul.imgSlide {
  animation: verticalscroll 180s linear infinite;
  -ms-animation: verticalscroll 180s linear infinite;
}

.startWord {
  font-size: 36px;
  line-height: 48px;
  font-weight: 800;
  color: rgb(0, 0, 0);
}

.endWord {
  font-size: 36px;
  line-height: 48px;
  font-weight: 800;
  color: rgb(179, 179, 179);
}

.imgWord {
  font-size: 24px;
  line-height: 28px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 100%;
  text-align: center;
  font-family: "Calibre-webfont", sans-serif;
  font-weight: 600;
  letter-spacing: 0;
}

.pc {
  border-radius: 10px;
}

.imgBox {
  border-radius: 10px;
  height: 33vh;
}

.right_box ul {
  display: inline-block;
  margin-right: 6%;
  width: 43%;
  height: calc(352px * 36);
}

.right_box ul:nth-child(2) {
  margin: -160px 0 0 0;
}

.right_box ul li {
  margin-top: 32px;
  width: 100%;
  position: relative;
}

@keyframes verticalscroll {
  0% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -moz-transform: translateY(-8448px);
    -ms-transform: translateY(-8448px);
    -webkit-transform: translateY(-8448px);
    transform: translateY(-8448px);
  }
}
</style>
