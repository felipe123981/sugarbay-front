import axiosConfig from "@/modules/axiosConfig";
import { readCookie } from "@/modules/cookie";

export default {
  namespaced: true,

  state: {
    products: []
  },
  actions: {
    async fetchProducts({commit}) {
      try {
        const response = await axiosConfig.get("/products"); 
        commit("FETCH_PRODUCTS", response.data)
      }
      catch(error) {
        console.log(error)
      }
      
    }
  },
  mutations: {
    async FETCH_PRODUCTS(state, payload) {
      state.products = payload;
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
