import axios from "axios";

const laravelConfig = axios.create({
    baseURL: 'http://10.1.1.145:8081/',
  });

export default laravelConfig;