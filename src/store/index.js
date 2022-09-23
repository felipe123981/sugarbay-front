//import axios from "axios";
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  loged: false,
  token: "",
  user: [
    {
      username: "Username",
      email: "",
      avatar_url: "",
    },
  ],
};

const getters = {};

const actions = {
    saveUser(context, payload) {
        console.log(payload)
    }
};

const mutations = {
  async saveUser(state, payload) { 
    state.user =   
    await axios.post("http://localhost:3333/sessions/", payload)
      .then(response => {
        state.token = response.data.token;
        return [
          {
            username: response.data.user.name,
            email: response.data.user.email,
            avatar_url: response.data.user.avatar_url,
          }
        ]
      })
      .catch(error => {
        console.log(error)
      }) 
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
