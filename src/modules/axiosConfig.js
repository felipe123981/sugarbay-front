import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'http://10.1.1.103:3333/',
  });

export default axiosConfig;