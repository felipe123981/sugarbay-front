
import { eraseCookie } from "@/modules/cookie";
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
                  avatar_url: resp.data.user.avatar_url
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
                avatar_url: response.data.user.avatar_url
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
      }
    }
  };