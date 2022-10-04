<template>
  <div>
    <br>
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
      </b-col>
    </b-row>
  </div>
</template>
<script>
import AvatarInput from "@/components/AvatarInput";
export default {
  name: "SignIn",
  components: {
    AvatarInput
  },
  data() {
    return {
      form: {
        avatar: null,
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
      }
    };
  }
};
</script>
<style scoped>
  .form-sb {
    width: 70vw;
  }
</style>
