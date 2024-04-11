import axiosConfig from "@/modules/axiosConfig";
import { readCookie } from "@/modules/cookie";
import laravelConfig from "@/modules/laravelConfig";

export default {
  namespaced: true,

  state: {
    user: [],
    isCustomer: true
  },
  actions: {
    async createUser({ commit }, payload) {
      try {
        await axiosConfig.post("/users", {
          name: payload.username,
          email: payload.email,
          password: payload.password
        })
        const token = await axiosConfig.post("/sessions",
          {
            email: payload.email,
            password: payload.password
          }
        )
          .then((resp) => {
            return resp.data.token;
          })
          .catch((err) => {
            console.log(err);
          })
        await axiosConfig.post("/customers", {
          name: payload.username,
          email: payload.email
        },
          {
            headers: {
              Authorization: "token " + token
            }
          }
        )
        const formData = new FormData();
        formData.append('avatar', payload.avatar);

        // Faça a solicitação PATCH usando o Axios
        await axiosConfig.patch('/users/avatar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Importante para enviar dados como FormData
            Authorization: "token " + token
          },
        });
        
        commit("CREATE_USER", payload)
      }
      catch (error) {
        console.log(error)
      }
    },
    async updateAvatar(avatarBlob) {
      try {

        // Crie um objeto FormData para enviar a imagem como um arquivo
        const token = readCookie(document.cookie);
        const formData = new FormData();
        formData.append('avatar', avatarBlob);

        // Faça a solicitação PATCH usando o Axios
        const response = await axiosConfig.patch('/users/avatar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Importante para enviar dados como FormData
            Authorization: "token " + token
          },
        });

        // Lida com a resposta do servidor
        console.log('Resposta do servidor:', response.data);
      } catch (error) {
        // Lida com erros, se houver algum
        console.error('Erro ao enviar avatar:', error);
      }
    }
  },
  mutations: {
    CREATE_USER(state, payload) {
      console.log("commit: ", payload);
    },
    updateAvatar(state, payload) {
      console.log(payload);
    },
    //verify user account
    sendConfirmationMail(state, payload) {
      laravelConfig
        .get("confirm-account" + payload)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //this method need to dispatch a customer module called createCustomer
  },
  getters: {}
};
