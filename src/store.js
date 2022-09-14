import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  loged: false,
  user: [
    {
      username: "Username",
      email: "",
      avatar: "",
      token: "",
    },
  ],
};

const getters = {
  getUserName() {
    return state.user[0].username;
  },
};

const actions = {
  setUser: ({ commit }) => commit("setUser"),
};

const mutations = {
  async setUser(state) {
    state.user = await axios
      .post("http://localhost:3333/sessions", {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        return [
          {
            username: response.data.user.name,
            email: response.data.user.email,
            avatar: response.data.user.avatar_url,
            token: response.data.token
          },
        ];
      });
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
