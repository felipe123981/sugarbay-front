<template>
  <div>
    <br />
    <h3 style="color: var(--text-color)">Create your account:</h3>
    <b-row>
      <b-col class="avatar-upload">
        <AvatarInput
          class="w-32 h-32 rounded-full"
          v-model="form.avatar"
        />
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <b-form-group
          id="input-group-1"
          label="Username:"
          label-for="input-1"
          description=""
        >
          <b-form-input
            class="form-sb"
            id="input-1"
            v-model="form.username"
            type="text"
            placeholder="ex: Michael123"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
          id="input-group-2"
          label="Email address:"
          label-for="input-2"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            class="form-sb"
            id="input-3"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
          id="input-group-4"
          label="Password:"
          label-for="input-4"
          description=""
        >
          <b-form-input
            class="form-sb"
            id="input-5"
            v-model="form.password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
          id="input-group-1"
          label="Repeat password:"
          label-for="input-1"
          description=""
        >
          <b-form-input
            class="form-sb"
            id="input-1"
            v-model="form.password_confirmation"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
        <p style="color: red" v-if="passwordsNotMatch">
          Passwords does not match!
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button
          @click="
            createNewUser(
              form.username,
              form.email,
              form.password,
              form.password_confirmation
            )
          "
          variant="primary"
          >Create account</b-button
        >
      </b-col>
    </b-row>
    <br>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import AvatarInput from "@/components/AvatarInput";
export default {
  name: "SignIn",
  components: {
    AvatarInput
  },
  watch: {
    'form.password': 'comparePasswords',
    'form.password_confirmation': 'comparePasswords',
    deep: true,
  },
  data() {
    return {
      passwordsNotMatch: false,
      form: {
        avatar: null,
        username: null,
        email: null,
        password: null,
        password_confirmation: null,
      }, 
    };
  },
  methods: {
    ...mapActions("user", {
      createUser: "createUser"
    }),
    ...mapMutations("user", {
      sendConfirmationMail: "sendConfirmationMail"
    }),
    ...mapMutations("user", {
      createUserAsCustomer: "createUserAsCustomer"
    }),
    comparePasswords() {
      if(this.form.password !== this.form.password_confirmation) {
        this.passwordsNotMatch = true;
      }
      else {
        this.passwordsNotMatch = false;
      }
    },
    async createNewUser(name, email, password, password_confirmation) {
      if (name && email && password && password_confirmation !== null) {
        if (password !== password_confirmation) {
          this.passwordsNotMatch = true;
          console.log("Password does not match!");
        }
        else {
          await this.createUser(this.form);
          this.sendConfirmationMail("/" + this.form.username + "/" + this.form.email);
          this.$bvToast.toast(
          "A confirmation as been send to your email!",
          {
            title: "Registration success.",
            variant: "success",
            solid: true,
          }
        );
        }
      } else {
        this.$bvToast.toast(
          "Please fill all data!",
          {
            title: "Registration failed.",
            variant: "danger",
            solid: true,
          }
        );
      }
      this.form = {
        avatar: null,
        username: null,
        email: null,
        password: null,
        password_confirmation: null
      };
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
#input-group-4 {
  color: var(--text-color);
}
.form-sb {
  width: 70vw;
}
</style>
