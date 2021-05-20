import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFullPage from "vue-fullpage.js";
import Map from "vue-naver-maps";

Vue.config.productionTip = false;

Vue.use(VueFullPage);

Vue.use(Map, {
  clientID: "API키",
  useGovAPI: false,
  subModules: "",
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
