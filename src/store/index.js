//import axios from "axios";
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  loged: false,
  token: "",
  cart: [],
  user: [
    {
      username: "Username",
      email: "",
      avatar_url: "",
    },
  ],
};

const getters = {};

const actions = {};

const mutations = {
  async login(state, payload) {
    state.user = await axios
      .post("http://localhost:3333/sessions/", payload)
      .then((response) => {
        state.token = response.data.token;
        state.loged = true;
        return [
          {
            username: response.data.user.name,
            email: response.data.user.email,
            avatar_url: response.data.user.avatar_url,
          },
        ];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  logout(state) {
    (state.loged = false),
      (state.token = ""),
      (state.user = [
        {
          username: "Username",
          email: "",
          avatar_url: "",
        },
      ]);
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
