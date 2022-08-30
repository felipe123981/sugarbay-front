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
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'LoginView',
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>