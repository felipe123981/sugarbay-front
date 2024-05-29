//Sempre altere baseURL para o ip do servidor

import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://192.168.15.7:3333/"
});

export default axiosConfig;
