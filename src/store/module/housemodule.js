import axios from "axios";

const state = {
  houseDealInfo: [],
};
const getters = {
  getHouseDeal() {
    // console.log(state.houseDealInfo);
    return state.houseDealInfo;
  },
};
const mutations = {
  HOUSELIST(state, payload) {
    state.houseDealInfo = payload;
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
};

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};
