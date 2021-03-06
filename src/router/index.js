import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Map from "../views/Map.vue";
import Search from "../views/Search.vue";
import News from "../views/News.vue";
import More from "../views/More.vue";
import Manager from "../views/Manager.vue";
import Favorite from "../views/Favorite.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import UserEdit from "../components/UserEdit.vue";
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
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/manager",
    name: "Manager",
    component: Manager,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite,
  },
  {
    path: "/useredit",
    name: "UserEdit",
    component: UserEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
