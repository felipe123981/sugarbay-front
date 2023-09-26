import axiosConfig from "@/modules/axiosConfig";

export default {
  namespaced: true,

  state: {
    customers: []
  },
  mutations: {
    FETCH_CUSTOMERS(state, payload) {
      state.customers = payload;
    },
    async createCustomer(state, payload) {
      state.customers = await axiosConfig
        .post("/customers", payload)
        .then((resp) => {
          return resp.data;
        })
        .catch((/*error*/) => {
          state.customers = [];
          //console.log(error);
        });
    }
  },
  getters: {
    getCustomerById: (state) => (id) => {
      return state.customers.find((customer) => customer.id === id);
    },
    getCustomerByEmail: (state) => (email) => {
      return state.customers.find((customer) => customer.email === email);
    },
    getCustomerByName: (state) => (name) => {
      return state.customers.find((customer) => customer.name === name);
    }
  },
  actions: {
    async fetchCustomers({ commit }) {
      try {
        const response = await axiosConfig.get("/customers");

        const customersData = [];
        for(let i in response.data.data)
        customersData.push(response.data.data[i])
        commit("FETCH_CUSTOMERS", customersData);
      } catch (err) {
        console.log(err);
      }
    },
  }
};
