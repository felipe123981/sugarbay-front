import replaceTo from "@/modules/replaceToHost";
import axiosConfig from "@/modules/axiosConfig";
import Vue from "vue";
import Vuex from "vuex";
import { eraseCookie } from "@/modules/cookie";

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
  users: {
    state: () => ({
      loged: false,
      token: "",
      user: [
        {
          username: "Username",
          email: "",
          avatar_url: ""
        }
      ]
    }),

    actions: {
      login(commit, payload) {
        commit("login", payload);
      }
    },
    mutations: {
      restoreSession(state, token) {
        setTimeout(() => {
          axiosConfig
            .get("/profile", {
              headers: {
                Authorization: `token ${token}`
              }
            })
            .then((resp) => {
              state.loged = true;
              state.user = [
                {
                  username: resp.data.name,
                  email: resp.data.email,
                  avatar_url: replaceTo(resp.data.avatar_url)
                }
              ];
            });
        }, 1000);
      },
      async login(state, payload) {
        state.user = await axiosConfig
          .post("/sessions", payload)
          .then((response) => {
            state.token = response.data.token;
            state.loged = true;
            return [
              {
                username: response.data.user.name,
                email: response.data.user.email,
                avatar_url: replaceTo(response.data.user.avatar_url)
              }
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
              avatar_url: ""
            }
          ]);
        eraseCookie();
      }
    },
    getters: {
      getUsername(state) {
        return state.user[0].username;
      },
      getAvatar(state) {
        return state.user[0].avatar_url;
      },
    }
  },
  orders: {
    state: () => ({
      cart: [],
    }),
    actions: {
      addToCart({ commit }, payload) {
        commit("addToCart", payload);
      }
    },
    mutations: {
      addToCart(state, payload) {
        const existProduct = state.cart.find((o) => o.id == payload.id);
    
        if (existProduct) {
          existProduct.quantity += 1;
        } else {
          payload.quantity = 1;
          state.cart.push(payload);
        }
      },
       removeFromCart(state, payload) {
        const idx = state.cart.findIndex(o => o.id === payload.id);
        state.cart.splice(idx, 1)
        
      }
    },
    getters: {
      getCart(state) {
        return state.cart
      }
    },
  },

  saved: {
    state: () => ({
      favorites: [],
    }),
    actions: {},
    mutations: {
      addToFavorites(state, payload) {
        const existProduct = state.favorites.find((o) => o.id == payload.id);
        if (existProduct) {
          state.favorites = state.favorites.filter((o) => o.id !== payload.id);
        } else {
          state.favorites.push(payload);
        }
      }
    },
    getters: {
      getFavorites(state) {
        return state.favorites
      }
    },
  }

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
