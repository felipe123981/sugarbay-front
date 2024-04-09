import axiosConfig from "@/modules/axiosConfig";
import { readCookie } from "@/modules/cookie";

export default {
  namespaced: true,

  state: {
    profile: undefined
  },
  actions: {
    async fetchProfile({ commit }) {
      try {
        const response = await axiosConfig.get("/profile", {
          headers: {
            Authorization: `token ${readCookie(document.cookie)}`
          }
        });

        const userData = {
          name: response.data.name,
          email: response.data.email,
          created_at: response.data.created_at,
          updated_at: response.data.updated_at,
          avatar_url: response.data.avatar_url
        };
        commit("fetchProfile", userData);
      } catch (err) {
        console.log(err);
      }
    },
    async setProfile({ commit }, payload) {
      try {
        const response = await axiosConfig.put("/profile", payload, {
          headers: {
            Authorization: `token ${readCookie(document.cookie)}`
          }
        });
        commit("setProfile", response);
      } catch (err) {
        console.log(err);
      }
    }
  },
  mutations: {
    fetchProfile(state, profile) {
      state.profile = profile;
    },
    setProfile(state, profile) {
      state.profile = profile;
    },
    eraseProfile(state) {
        state.profile = undefined;
    }
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  }
};
