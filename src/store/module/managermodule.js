import axios from "axios";
import store from "..";

const state = {
  userlist: [],
  user: {},
};
const getters = {
  usergetter() {
    return state.userlist;
  },
};
const mutations = {
  USERLIST(state, payload) {
    for (let user of payload) {
      state.userlist.push(user);
    }
    console.log(state.userlist);
  },
  CLEAR(state) {
    state.userlist = [];
  },
};
const actions = {
  getusers({ commit }) {
    commit("CLEAR");
    console.log(store.state.userInfo.userToken);
    const headers = {
      "X-AUTH-TOKEN": store.state.userInfo.userToken,
    };
    axios.get("http://localhost/admin/selectUsers", headers).then((data) => {
      commit("USERLIST", data.data);
    });
  },
  deleteuser({ commit }, userid) {
    const headers = {
      "X-AUTH-TOKEN": store.state.userInfo.userToken,
    };
    console.log(store.state.userInfo.userToken);
    axios
      .delete("http://localhost/admin/deleteUser?userId=" + userid.userid, headers)
      .then((data) => {});
  },
};
export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};
