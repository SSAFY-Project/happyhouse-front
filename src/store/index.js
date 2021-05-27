import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import newsmodule from "./module/newsmodule";
import managermodule from "./module/managermodule";
import housemodule from "./module/housemodule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
    allUser: [
      {
        id: "woongseob",
        name: "웅섭",
        date: "21-05-01",
        role: "관리자",
      },
      {
        id: "donggil",
        name: "동길",
        date: "21-05-02",
        role: "관리자",
      },
      {
        id: "soojin",
        name: "수진",
        date: "21-05-03",
        role: "관리자",
      },
      {
        id: "seongmin",
        name: "성민",
        date: "21-05-04",
        role: "관리자",
      },
      {
        id: "chanho",
        name: "찬호",
        date: "21-05-05",
        role: "사용자",
      },
    ],
  },
  mutations: {
    loginSuccess(state, payload) {
      return new Promise((resolve, reject) => {
        state.isLogin = true;
        state.isLoginError = false;
        state.userInfo = payload;

        resolve();
      });
    },
    loginError(state) {
      return new Promise((resolve, reject) => {
        state.isLogin = false;
        state.isLoginError = true;
        state.userInfo = null;

        resolve();
      });
    },
  },
  getters: {
    getLogin(state) {
      return state.isLogin;
    },
    newsgetter(state) {
      return state.newsmodule.state.newsList;
    },
    // getHouseDeal(state) {
    //   return state.housemodule.state.houseDealInfo;
    // },
    /*allUser(state) {
      return state.allUser;
    }*/
  },
  actions: {
    // 로그인
    async login({ commit }, loginObj) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost/user/login", loginObj)
          .then((res) => {
            // 성공했으므로 토큰 받음
            console.log(res.data.token);
            let userInfo = {
              userToken: res.data.token,
              userEmail: res.data.user.userEmail,
              userName: res.data.user.userNickName,
              userFavorite: res.data.favorite,
            };
            commit("loginSuccess", userInfo);
            resolve("로그인 성공");
          })
          .catch(() => {
            commit("loginError");
            reject("아이디와 비밀번호를 확인하세요.");
          });
      });
    },
    async logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("loginError");
        resolve("로그아웃 되었습니다");
      });
    },
    getUserInfo({ commit }, userInfo) {
      // 로컬에 있는 토큰 받기
      // let token = localStorage.getItem("access_token");
      // let config = {
      //   headers: {
      //     "access-token": token,
      //   },
      // };
      // commit("loginSuccess", userInfo);
      // axios
      //   .get("https://reqres.in/api/login/2")
      //   .then((response) => {
      //     commit("loginSuccess", userInfo);
      //   })
      //   .catch(() => {
      //     alert("아이디와 비밀번호를 확인하세요.");
      //   });
    },
  },
  modules: {
    newsmodule: newsmodule,
    managermodule: managermodule,
    housemodule: housemodule,
  },
});
