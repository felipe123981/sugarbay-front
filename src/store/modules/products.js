import axiosConfig from "@/modules/axiosConfig";

export default {
  namespaced: true,

  state: {
    products: []
  },
  mutations: {
    fetchProducts(state) {
      axiosConfig
        .get("/products")
        .then((resp) => {
          state.products = resp.data;
        })
        .catch((error) => {
          console.log(error);
          return 0;
        });
    },
    removeProduct(state, payload) {
      const idx = state.favorites.findIndex((o) => o.id === payload.id);
      state.products.splice(idx, 1);
    },
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getProducts(state) {
      return state.products;
    }
  }
};
