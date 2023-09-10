import axiosConfig from "@/modules/axiosConfig";
import { readCookie } from "@/modules/cookie";

export default {
  namespaced: true,

  state: {
    products: []
  },
  mutations: {
    async fetchProducts(state) {
      await axiosConfig
        .get("/products")
        .then((resp) => {
          state.products = resp.data;
        })
        .catch(() => {
          state.product = []
          return 0;
        });
    },
    removeFromProducts(state, payload) {
      const token = readCookie(document.cookie);
      axiosConfig
        .delete("products/" + payload.id, {
          headers: {
            Authorization: `token ${token}`
          }
        })
        .then((resp) => {
          if (resp.status == 200) {
            const idx = state.products.findIndex((o) => o.id === payload.id);
            state.products.splice(idx, 1);
          }
        })
        .catch((/*err */) => {
          //console.log(err);
        });
    }
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    getProducts(state) {
      return state.products;
    }
  }
};
