import replaceTo from "@/modules/replaceToHost";
import axiosConfig from "@/modules/axiosConfig";
import Vue from "vue";
import Vuex from "vuex";
import { eraseCookie } from "@/modules/cookie";

Vue.use(Vuex);
const state = {
  loged: false,
  token: "",
  favorites: [],
  cart: [],
  user: [
    {
      username: "Username",
      email: "",
      avatar_url: "",
    },
  ],
  message_count: 0,
  cart_itens_count: 0,
  saved_itens_count: 0,
};

const getters = {};

const actions = {};

const mutations = {
  addProduct(state, payload) {
    const existProduct = state.cart.find((o) => o.id == payload.id);

    if (existProduct) {
      existProduct.quantity += 1;
    } else {
      payload.quantity = 1;
      state.cart.push(payload);
    }
  },
  restoreSession(state, token) {
    setTimeout(() => {
      axiosConfig
      .get("/profile", {
        headers: {
          'Authorization': `token ${token}`,
        },
      })
      .then((resp) => {
        state.loged = true;
        state.user = [
          {
            username: resp.data.name,
            email: resp.data.email,
            avatar_url: replaceTo(resp.data.avatar_url),
          },
        ];
      });
    }, 
    1000)
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
            avatar_url: replaceTo(response.data.user.avatar_url),
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
    eraseCookie();
  },
  addToFavorites(state, payload) {
    const existProduct = state.favorites.find(o => o.id == payload.id);
    if(existProduct) {
      state.favorites = state.favorites.filter(o => o.id !== payload.id);
    }
    else {
      state.favorites.push(payload);
    }
  }

}
  const modules = {
    namespaced: true,
    users: {
      state: () => ({
        user: [
          {
            username: "Username",
            email: "",
            avatar_url: "",
          },
        ],
      }),
      
      actions: {},
      mutations: {},
      getters: {
        getUsername(state) {
          return state.user.username;
        }
      }
    }
  }

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