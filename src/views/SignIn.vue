<template>
  <div>
    <br />
    <h3>Create your account:</h3>
    <b-row>
      <b-col class="avatar-upload">
        <AvatarInput
          class="w-32 h-32 rounded-full"
          v-model="form.avatar"
          src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg"
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
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            class="form-sb"
            id="input-1"
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
          id="input-group-1"
          label="Password:"
          label-for="input-1"
          description=""
        >
          <b-form-input
            class="form-sb"
            id="input-1"
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
            createUser(
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
  </div>
</template>
<script>
//import { mapMutations } from "vuex";
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
    //if(password !== password_confirmation)
    //passwordNotMatch = true
  },
  data() {
    return {
      passwordsNotMatch: false,
      form: {
        avatar: null,
        username: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  methods: {
    comparePasswords() {
      if(this.form.password !== this.form.password_confirmation) {
        this.passwordsNotMatch = true;
      }
      else {
        this.passwordsNotMatch = false;
      }
    },
    createUser(name, email, password, password_confirmation) {
      if (name && email && password && password_confirmation !== null) {
        if (password !== password_confirmation) {
          this.passwordsNotMatch = true;
          console.log("Password does not match!");
        }
        else {
          this.$bvToast.toast(
          "You can now Login!",
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
.form-sb {
  width: 70vw;
}
</style>
