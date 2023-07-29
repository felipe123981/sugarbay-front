import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin, ToastPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(ToastPlugin)

Vue.use(VueRouter);
Vue.config.productionTip = true;

const env = {
  API_URL: process.env.VUE_APP_API_URL
};

new Vue({
  data: env,
  render: (h) => h(App),
  store,
  router
}).$mount("#app");

 