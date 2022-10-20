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
    getProductById(state, id) {
      const product = state.products.filter((o) => o.id === id);
      return product;
    },
    getProducts(state) {
      return state.products;
    }
  }
};
