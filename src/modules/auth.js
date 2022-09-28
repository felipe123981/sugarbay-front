// the authenticate function is trhowing an Promisse pensing fullfilled

import axios from "axios";
//import { readCookie } from "./cookie";
const url = "http://localhost:3333/profile/";

export function isValidToken(token) {
  axios
    .get(url, {
      headers: {
        'Authorization': `token ${token}`,
      },
    })
    .then((resp) => {
      console.log(resp.data);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}
