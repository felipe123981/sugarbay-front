<template>
  <br />
  <strong>Login:</strong>
  <p class="text">email:</p>
  <input
    type="email"
    name="email"
    id="email"
    v-model="email"
    placeholder="email here..."
  />
  <br />
  <p class="text">password:</p>
  <input type="password" name="password" id="password" v-model="password" />
  <br />
  <input type="submit" placeholder="submit" @click="submit" />
  <br />
  <br />
  <router-link to="/forgot" class="forgot"> Esqueceu sua senha?</router-link>
</template>
<script>
import axios from "axios";
import Cookies from 'js-cookie';

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      cookie: [
        {
          name: "",
          email: "",
          token: "",
        },
      ],
    };
  },
  methods: {
    async submit() {
      const cookie = await axios
        .post("http://localhost:3333/sessions/", {
          email: this.email,
          password: this.password,
        })
        .then(function (response) {

          console.log(response.status);

          const cookie = [
            {
              name: response.data.user.name,
              email: response.data.user.email,
              token: response.data.token,
            },
          ];

          return cookie[0];
        })
        .catch(function (error) {
          console.log(error);
        });

      this.email = "";
      this.password = "";
      this.writeCookie(cookie);
      
    },

    writeCookie(cookie) {
      Cookies.set("email", cookie.email);
      Cookies.set("token", cookie.token);
      
      console.log(`${document.cookie}`);
    },
    readCookie() {
      var searchName = "email=";
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ` `) c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0)
          return c.substring(searchName.length, c.length);
      }
      return null;
    },
  },
};
</script>
<style scoped>
.text,
strong {
  color: var(--text-color);
}
.forgot {
  text-decoration: none;
}
</style>
