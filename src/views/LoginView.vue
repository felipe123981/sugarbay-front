<!--<template>
 <div>
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
  </div>
  
</template>
<script>
import axios from "axios";
import Cookies from "js-cookie";

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
-->

<template>
  <div>
    <h2>Login Panel:</h2>
    <b-form v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          class="form"
          id="input-1"
          v-model="email"
          type="email"
          autocomplete="current-email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          class="form"
          type="password"
          autocomplete="current-password"
          v-model="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" @click.prevent="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>
    <br />
    <strong>
      Don't have an account? <router-link to="/sign-in">Sign-in</router-link>.
    </strong>
    <br />
    <br />
    <p v-b-modal.modal-1 class="password">Forgot my password.</p>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { writeCookie } from "@/modules/cookie";
import axiosConfig from "@/modules/axiosConfig";

export default {
  name: "LoginView",
  computed: {
    ...mapGetters("session", {
      getUsername: "getUsername"
    })
  },
  data() {
    return {
      email: "",
      password: "",
      cookie: [
        {
          name: "",
          email: "",
          token: ""
        }
      ],
      show: true
    };
  },
  methods: {
    ...mapMutations("session", {
      login: "login"
    }),
    async submit() {
      const status = await axiosConfig
        .post("/sessions", {
          email: this.email,
          password: this.password
        })
        .then(function (response) {
          return response.status;
        })
        .catch(function (error) {
          console.log(error);
        });
      const request = await axiosConfig
        .post("/sessions", {
          email: this.email,
          password: this.password
        })
        .then(function (response) {
          const cookie = [
            {
              id: response.data.user.id,
              name: response.data.user.name,
              email: response.data.user.email,
              token: response.data.token
            }
          ];
          return cookie[0];
        })
        .catch(function (error) {
          console.log(error);
        });

      if (status == 200) {
        this.login({
          email: this.email,
          password: this.password
        });

        this.$bvToast.toast(` Welcome  ${this.getUsername}!`, {
          title: ` Login success. `,
          variant: "success",
          solid: true
        });
      } else {
        this.$bvToast.toast("Incorrect email or password combination!", {
          title: ` Login failed. `,
          variant: "danger",
          solid: true
        });
      }
      this.email = "";
      this.password = "";
      writeCookie(request);
    }
  }
};
</script>
<style scoped>
.form {
  width: 60vw;
}
.password {
  color: blue;
}
</style>
