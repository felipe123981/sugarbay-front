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
</template>
<script>
import axios from "axios";
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
      this.cookie = cookie;

      console.log(this.cookie.name);

      document.cookie =
        "path=/" +
        "; name=" +
        this.cookie.name.split(" ").join("") +
        "; email=" +
        this.cookie.email +
        "; token=" +
        this.cookie.token;

      console.log(`${document.cookie}`);
    },
  },
};
</script>
<style scoped>
.text,
strong {
  color: var(--text-color);
}
</style>
