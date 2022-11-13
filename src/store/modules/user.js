import axiosConfig from "@/modules/axiosConfig";
import laravelConfig from "@/modules/laravelConfig";

export default {
  namespaced: true,

  state: {
    user: [],
    isCustomer: true
  },
  actions: {},
  mutations: {
    //verify user account
    sendConfirmationMail(state, payload) {
       laravelConfig.get("/confirm-account" + payload)
       .then(resp => {
        console.log(resp.data);
       })
       .catch(error => {
        console.log(error);
       })
    },
    //this method need to dispatch a customer module called createCustomer
    async createUserAsCustomer(state, payload) {
      state.user = await axiosConfig
        .post("/users", payload)
        .then((resp) => {
          return resp.data;
        })
        .catch((error) => {
          console.log(error);
          return [];
        });
    }
  },
  getters: {}
};
