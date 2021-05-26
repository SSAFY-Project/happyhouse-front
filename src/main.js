import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFullPage from "vue-fullpage.js";
//import Map from "vue-naver-maps";
import Toggle from "vue-js-toggle-button";
import VueNumber from "vue-number-animation";
import Buefy from "buefy";

Vue.config.productionTip = false;

Vue.use(VueFullPage).use(Toggle).use(VueNumber).use(Buefy);

/*Vue.use(Map, {
  clientID: "g0htgx7lt8",
  useGovAPI: false,
  subModules: "",
});*/

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
