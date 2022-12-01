import axios from "axios";

const laravelConfig = axios.create({
    baseURL: 'http://10.1.1.103:8081/',
  });

export default laravelConfig;