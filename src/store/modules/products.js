import axiosConfig from "@/modules/axiosConfig";
import { readCookie } from "@/modules/cookie";

export default {
  namespaced: true,

  state: {
    products: [],
    vendor_products: [],
    my_products: [],
  },
  actions: {
    async fetchProductsByVendor({ commit }, payload) {
      try {
        const response = await axiosConfig.get(
          `/products/customerId/${payload}`
        );
        commit("FETCH_PRODUCTS_BY_CUSTOMER_ID", response.data);
        //return response.data;
        //console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProducts({ commit }) {
      try {
        const response = await axiosConfig.get("/products");
        commit("FETCH_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMyProducts({ commit }) {
      try {
        const token = readCookie(document.cookie);
        console.log(token);

        const resp = await axiosConfig.post(
          "products/myProducts",
          {},
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        console.log(resp.data);
        commit("FETCH_MY_PRODUCTS", resp.data);
      } catch (error) {
        console.log(error);
      }
    },
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
            Authorization: `token ${token}`,
          },
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
    },
    FETCH_PRODUCTS_BY_CUSTOMER_ID(state, payload) {
      state.vendor_products = payload;
    },
    FETCH_MY_PRODUCTS(state, payload) {
      state.my_products = payload;
    },
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    getProducts(state) {
      return state.products;
    },
    getVendorProducts(state) {
      return state.vendor_products;
    },
    getMyProducts(state) {
      return state.my_products;
    },
  },
};
