import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
      state.userInfo = null;
    }
  },
  actions: {
    // 로그인
    login({ commit }, loginObj) {
      axios
        .post("https://reqres.in/api/login", loginObj)
        .then(res => {
          // 성공했으므로 토큰 받음
          let token = res.data.token;
          let config = {
            headers: {
              "access-token": token,
            }
          }
          axios
            .get("https://reqres.in/api/login/2", config)
            .then(response => {
              let userInfo = {
                id: response.data.data.id,
                nickname: response.data.data.nickname,
                favorite: response.data.data.favorite,
              }
              commit("loginSuccess", userInfo)
            })
            .catch(() => {
              alert('아이디와 비밀번호를 확인하세요.')
            })
        })
        .catch(() => {
          alert('아이디와 비밀번호를 확인하세요.')
        })
    }
  },
  modules: {},
});
