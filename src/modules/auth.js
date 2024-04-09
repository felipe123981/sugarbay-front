// the authenticate function is trhowing an Promisse pensing fullfilled

import axiosConfig from "./axiosConfig";
//import { readCookie } from "./cookie";

export async function isValidToken(token) {
   await axiosConfig
    .get('users', {
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
