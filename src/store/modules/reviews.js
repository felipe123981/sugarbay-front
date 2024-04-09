import axiosConfig from "@/modules/axiosConfig";
import { readCookie } from "@/modules/cookie";

export default {
  namespaced: true,
  state: {
    reviews: undefined
  },
  actions: {
    async fetchReviews({ commit }) {
      try {
        const response = await axiosConfig.get("/reviews");

        commit("FETCH_REVIEWS", await response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async createReview({ commit }, payload) {
      try {
        const token = readCookie(document.cookie);
        const response = await axiosConfig.post(
          "/reviews",
          {
            rating: payload.rating,
            content: payload.comment,
            product_id: payload.product_id
          },
          {
            headers: {
              Authorization: `token ${token}`
            }
          }
        );
        console.log("payload:", payload);
        commit("CREATE_REVIEW", response.data);
      } catch (error) {
        console.log("payload: ", payload);
        console.log(error);
      }
    },
    async updateReview() {},
    async deleteReview() {}
  },
  mutations: {
    FETCH_REVIEWS(state, payload) {
      state.reviews = payload;
    },
    CREATE_REVIEW(state, payload) {
      state.reviews.push(payload);
    },
    UPDATE_REVIEW() {},
    DELETE_REVIEW() {}
  },
};
