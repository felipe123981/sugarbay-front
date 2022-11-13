import axiosConfig from "@/modules/axiosConfig";

export default {
    namespaced: true,

    state: {
        customer: []
    },
    mutations: {
        async createCustomer(state, payload) {
            state.customer  = await axiosConfig.post("/customers", payload)
            .then(resp => {
                return resp.data;
            })
            .catch(error => {
                state.customer = [];
                console.log(error);
            })
        }
    },
    getters: {},
    actions: {},
}