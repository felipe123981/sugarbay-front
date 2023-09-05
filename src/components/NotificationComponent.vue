<template>
  <div id="app">
    
    <div class="notification">
      <div class="content">
        <div class="flag" :style="background_color">
          <i :class="flag + ' icon'"></i>
        </div>
        <div class="body">
          <div class="header">
            <div class="title">
              <h5>{{ title }}</h5>
            </div>
            <div class="date">
              {{ date }}
            </div>
          </div>
          <div class="message">
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotificationComponent",
  props: {
    flag: String,
    title: String,
    message: String,
    date: String
  },
  data() {
    return {
      background_color: "white"
    };
  },
  mounted() {
    switch (this.$props.flag) {
      case "bx bx-lock":
        this.background_color = "background-color: #fef9c3;";
        break;
      case "bx bx-sync":
        this.background_color = "background-color: #3b82f680;";
        break;
      case "bx bx-money":
        this.background_color = "background-color: #22c55e80";
        break;
      case "bx bx-x-circle":
        this.background_color = "background-color: #EB8E7C";
        break;
      case "bx bx-package":
        this.background_color = "background-color: #EBC76D";
        break;
      case "bx bx-money-withdraw":
        this.background_color = "background-color: #3b82f680;";
        break;
      default:
        this.background_color = "#fff";
    }
  }
};
</script>
<style scoped>
.icon {
  min-width: 15px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

* {
  color: #707070;
}
.notification {
  display: flex;
  max-width: 500px;
  min-width: 270px;
  width: 95%;
  background-color: var(--sidebar-color);
  border-radius: 10px;
}
.content {
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
}
.flag {
  border: 3px solid;
  border-color: #fff;
  height: 60px;
  width: 60px;
  padding: 15px;
  margin: 10px;
  border-radius: 50%;
  --tw-bg-opacity: 1;
}
.body {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
}
.message {
  margin-left: 8px;
}
.header {
  display: flex;
  flex-flow: row wrap-reverse;
  margin-left: 8px;
}
.date {
  margin-left: auto;
  margin-bottom: 0;
  right: 0;
}
</style>
