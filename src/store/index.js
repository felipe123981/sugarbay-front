import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import cart from "./modules/cart";
import session from "./modules/session";
import favorites from "./modules/favorites";
import user from "./modules/user";
import customer from "./modules/customer";

Vue.use(Vuex);
const state = {
  message_count: 0,
  cart_itens_count: 0,
  saved_itens_count: 0
};

const getters = {};

const actions = {};

const mutations = {};

const modules = {
  products,
  cart,
  session,
  favorites,
  user,
  customer
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
});

/*
const user = {
  state: () => ({ 
    user: [
      {
        username: "Username",
        email: "",
        avatar_url: "",
      },
    ],
  }),
  mutations: {},
  actions: {},
  getters: {
    getUsername(state) {
      return state.user.username
    }
  }
}

const store = new Vuex.Store({
  modules: {
    user
  }
})

export default store;
*/
