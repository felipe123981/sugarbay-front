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
    removeFromProducts(state, payload) {
      axiosConfig.delete("products/" + payload.id)
      .then((resp) => {
        if (resp.status == 200) {
          const idx = state.products.findIndex((o) => o.id === payload.id);
          state.products.splice(idx, 1);
        }
      })
      .catch((err) => {
        console.log(err);
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
