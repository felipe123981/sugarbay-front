//Sempre altere baseURL para o ip do servidor

import axios from "axios";

const axiosConfig = axios.create({
  timeout: 5 * 1000,
  baseURL: "http://10.1.1.107:3333/"
});

export default axiosConfig;
