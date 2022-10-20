export default {
  namespaced: true,

  state: {
    cart: [],
    total: 0
  },

  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
    }
  },

  mutations: {
    addToCart(state, payload) {
      const existProduct = state.cart.find((o) => o.id == payload.id);

      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        payload.quantity = 1;
        state.cart.push(payload);
      }
    },
    removeFromCart(state, payload) {
      const idx = state.cart.findIndex((o) => o.id === payload.id);
      state.cart.splice(idx, 1);
    }
  },

  getters: {
    getCartLenght(state, getters) {
      return getters.getCart.lenght();
    },
    getTotal(state) {
        state.total = state.cart.reduce((a, b) => a + parseFloat(b.price), 0);
        return state.total;
      },
    getCart(state) {
      return state.cart;
    }
  }
};
