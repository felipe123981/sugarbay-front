// the authenticate function is trhowing an Promisse pensing fullfilled

import axios from "axios";
import axiosConfig from "./axiosConfig";
const API_URL = axiosConfig.defaults.baseURL;
//import { readCookie } from "./cookie";
const url = `${API_URL}profile/`;

export async function isValidToken(token) {
   await axios
    .get(url, {
      headers: {
        'Authorization': `token ${token}`,
      },
    })
    .then(() => {
      return true;
    })
    .catch((/*error*/) => {
      //console.log(error);
      return false;
    });
}
