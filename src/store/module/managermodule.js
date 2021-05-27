import axios from "axios";

const state = {
  userlist: [],
  user: Object,
};
const getters = {
  newgetter() {
    return state.userlist;
  },
};
const mutations = {
  USERLIST(state, payload) {
    state.userlist = payload;
  },
};
const actions = {
  getusers({ commit }) {
    axios.get("http://localhost/admin/selectUsers").then((data) => {
      commit("USERLIST", data);
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
