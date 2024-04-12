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
    <h2 style="color: var(--text-color)">
      <i class="bx bxs-user"></i> Login Panel:
    </h2>
    <b-form v-if="show">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input class="form" id="input-1" v-model="email" type="email" autocomplete="current-email"
          placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" class="form" type="password" autocomplete="current-password" v-model="password"
          placeholder="Enter password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" @click.prevent="submit" variant="primary">Submit</b-button>
    </b-form>
    <br />
    <strong style="color: var(--text-color);">
      Don't have an account? <router-link to="/sign-up">Sign-up</router-link>.
    </strong>
    <br />
    <br />
    <p v-b-modal.modal-1 class="password">Forgot my password.</p>
    <b-modal :header-bg-variant="headerBgVariant" :body-bg-variant="bodyBgVariant" id="modal-1" class="forgot_passwd"
      ref="my-modal" hide-footer title="Enter your email:">
      <div class="input_email">
        <b-form-input id="email_imput" v-model="send_link_mail" class="form" type="email" />
      </div>
      <b-button class="mt-3" variant="primary" pill @click="sendResetLink">Send</b-button>
    </b-modal>


  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { writeCookie } from "@/modules/cookie";
import axiosConfig from "@/modules/axiosConfig";

export default {
  name: "LoginView",
  computed: {
    ...mapGetters("session", {
      getUsername: "getUsername",
      getEmail: "getEmail",
      getToken: "getToken"
    })
  },
  mounted() {
    // Adiciona um listener para o evento 'DOMSubtreeModified' no elemento 'body'
    document.body.addEventListener('DOMSubtreeModified', this.updateBodyColor);
  },
  beforeDestroy() {
    // Remove o listener quando o componente é destruído para evitar vazamentos de memória
    document.body.removeEventListener('DOMSubtreeModified', this.updateBodyColor);
  },
  data() {
    return {
      headerBgVariant: "dark",
      bodyBgVariant: "dark",
      send_link_mail: "",
      email: "",
      password: "",
      show: true,
    };
  },
  methods: {
    ...mapActions("session", {
      login: "login"
    }),
    updateBodyColor() {
      // Atualiza a propriedade 'bodyColor' com a classe atual do elemento 'body'
      this.bodyColor = document.body.className;
      //console.log(`A classe do elemento body foi alterada para: ${this.bodyColor}`);
      if (this.bodyColor === "modal-open") {
        this.headerBgVariant = "light";
        this.bodyBgVariant = "light";
      }
      else {
        this.headerBgVariant = "dark";
        this.bodyBgVariant = "dark";
      }
    },
    async submit() {
      const status = await axiosConfig
        .post("/sessions", {
          email: this.email,
          password: this.password
        })
        .then(function (response) {
          return response.status;
        })
        .catch(function (/*error*/) {
          //console.log(error);
        });

      if (status == 200) {
        await this.login({
          email: this.email,
          password: this.password
        });

        //this.$router.push({ name: 'home' });
        this.$bvToast.toast(` Welcome back ${this.getUsername}!`, {
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

      let cookie = {
        email: this.getEmail,
        name: this.getUsername,
        token: this.getToken
      };
      this.email = "";
      this.password = "";

      writeCookie(cookie);
    },
    async sendResetLink() {
      try {
        await axiosConfig.post("/password/forgot", {
          email: this.send_link_mail
        })
        this.$bvToast.toast("Reset link sended! Check you inbox or spam box.", {
          title: `Success`,
          variant: "success",
          solid: true
        });
      }
      catch (error) {
        this.$bvToast.toast("Can't sent link to your email! Try again later!", {
          title: `Error`,
          variant: "danger",
          solid: true
        });
      }
    }
  }
};
</script>
<style scoped>
#input-group-1 {
  color: var(--text-color);
}

#input-group-2 {
  color: var(--text-color);
}

.forgot_passwd {
  background-color: var(--background-color);
}

.form {
  width: 60vw;
}

.password {
  color: blue;
}
</style>
