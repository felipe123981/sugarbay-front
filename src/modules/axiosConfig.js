//Sempre altere baseURL para o ip do servidor

import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'http://10.1.1.107:3333/',
  });

export default axiosConfig;