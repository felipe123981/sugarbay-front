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
    }
  },
  getters: {
    getProductById(state, payload) {
      const product = state.products.filter((o) => o.id == payload);
      return product;
    },
    getProducts(state) {
      return state.products;
    }
  }
};
