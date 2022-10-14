export default {
  namespaced: true,

  state: {
    favorites: []
  },
  actions: {},
  mutations: {
    addToFavorites(state, payload) {
      const existProduct = state.favorites.find((o) => o.id == payload.id);
      if (existProduct) {
        state.favorites = state.favorites.filter((o) => o.id !== payload.id);
      } else {
        state.favorites.push(payload);
      }
    }
  },
  getters: {
    getFavorites(state) {
      return state.favorites;
    }
  }
};
