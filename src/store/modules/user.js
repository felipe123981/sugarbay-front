import axiosConfig from "@/modules/axiosConfig";

export default {
  namespaced: true,

  state: {
    user: [],
    isCustomer: true
  },
  actions: {},
  mutations: {
    async createUser(state, name, email, password) {
      state.user = await axiosConfig
        .post("/users", {
          name: name,
          email: email,
          password: password
        })
        .then((resp) => {
          return resp;
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
    }
  },
  getters: {}
};
