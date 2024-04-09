//Sempre altere baseURL para o ip do servidor

import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3333/"
});

export default axiosConfig;
