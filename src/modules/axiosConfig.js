import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://10.1.1.103:3333/',
    timeout: 250,
  });

export default axiosConfig;