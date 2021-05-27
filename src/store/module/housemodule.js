import axios from "axios";
import store from "..";

const state = {
  houseDealInfo: [],
  favoriteList: [],
};
const getters = {
  getHouseDeal() {
    // console.log(state.houseDealInfo);
    return state.houseDealInfo;
  },
  getFavoriteDeal() {
    return state.favoriteList;
  },
};
const mutations = {
  HOUSELIST(state, payload) {
    state.houseDealInfo = payload;
  },
  FAVORITELIST(state, payload) {
    for (const favor of payload) {
      console.log(favor.houseDealDto);
      state.favoriteList.push(favor.houseDealDto);
    }
  },
  CLEAR(state) {
    state.favoriteList = [];
  },
};
const actions = {
  getHouseDeals({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost/search/all").then((data) => {
        commit("HOUSELIST", data.data.totalList);
        resolve();
      });
    });
  },
  getfavorite({ commit }) {
    return new Promise((resolve, reject) => {
      commit("CLEAR");
      axios
        .get("http://localhost/favorite/getFavListByUserId?userId=" + store.state.userInfo.userId)
        .then((data) => {
          commit("FAVORITELIST", data.data);
          resolve();
        });
    });
  },
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};
