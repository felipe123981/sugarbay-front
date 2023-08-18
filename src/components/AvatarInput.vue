<template>
  <div>
    <div
      v-if="
        getAvatar != '' && this.file === require('@/assets/img/34-512.webp')
      "
      class="wrapper"
      :style="{
        background: 'url(' + getAvatar + ')',
        'background-size': 'contain'
      }"
    >
      <b-form-file
        class="my_file"
        v-model="file"
        :state="Boolean(file)"
        plain
      ></b-form-file>
    </div>
    <div v-else class="wrapper" :style="{ 'background-image': `url(${file})` }">
      <b-form-file
        class="my_file"
        v-model="file"
        :state="Boolean(file)"
        plain
      ></b-form-file>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
//import userIcon  from "@/assets/img/userIcon.png"
export default {
  name: "AvatarInput",
  computed: {
    ...mapGetters("session", {
      getAvatar: "getAvatar"
    })
  },
  data() {
    return {
      file: require('@/assets/img/34-512.webp'),
    };
  },
  watch: {
    file(newFile) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.file = e.target.result;
        //console.log(this.fileBlob)
      };
      reader.readAsDataURL(newFile);
      this.$emit("input", newFile);
    }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  background: transparent;
}
.wrapper {
  /*
   background: url("https://cdn0.iconfinder.com/data/icons/basic-11/97/34-512.png");
  */

  background-size: cover;
  height: 150px;
  width: 150px;
  position: relative;
  border: 5px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
}
.my_file {
  position: absolute;
  bottom: 0;
  outline: none;
  color: transparent;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5vh 3.5rem;
  cursor: pointer;
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.5);
}
.my_file::-webkit-file-upload-button {
  visibility: hidden;
}
.my_file::before {
  content: "\1F4F7";
  font-size: 4vh;
  color: #fff;
  display: inline-block;
  -webkit-user-select: none;
}
.my_file::after {
  content: "Update";
  font-family: "arial";
  font-weight: bold;
  color: #fff;
  display: block;
  top: 70px;
  font-size: 14px;
  position: absolute;
}
</style>
