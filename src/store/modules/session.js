import { eraseCookie, readCookie } from "@/modules/cookie";
import axiosConfig from "@/modules/axiosConfig";

export default {
  namespaced: true,

  state: {
    loged: false,
    token: "",
    user: [
      {
        username: "Username",
        email: "",
        avatar_url: ""
      }
    ]
  },

  actions: {
    async login({ commit }, payload) {
      try {
        const response = await axiosConfig.post("/sessions", payload);
        const userData = {
          username: response.data.user.name,
          email: response.data.user.email,
          avatar_url: response.data.user.avatar_url
        };
        commit("login", { token: response.data.token, user: userData });
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    async restoreSession(state, token) {
      await axiosConfig
        .get("/profile", {
          headers: {
            Authorization: `token ${token}`
          }
        })
        .then((resp) => {
          state.token = readCookie(document.cookie);
          state.loged = true;
          state.user = [
            {
              username: resp.data.name,
              email: resp.data.email,
              avatar_url: resp.data.avatar_url
            }
          ];
        })
        .catch((/*err*/) => {
          //console.log(err);
          eraseCookie(document.cookie);
        });
    },

    login(state, { token, user }) {
      state.token = token;
      state.loged = true;
      state.user[0].username = user.username;
      state.user[0].email = user.email;
      state.user[0].avatar_url = user.avatar_url;
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
    getProfile(state) {
      return state.profile;
    },
    getUsername(state) {
      return state.user[0].username;
    },
    getEmail(state) {
      return state.user[0].email;
    },
    getToken(state) {
      return state.token;
    },
    getAvatar(state) {
      return state.user[0].avatar_url;
    }
  }
};
