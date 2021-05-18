import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Map from "../views/Map.vue";
import Search from "../views/Search.vue";
import News from "../views/News.vue";
import More from "../views/More.vue";
import SignIn from "../components/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/more",
    name: "More",
    component: More,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
