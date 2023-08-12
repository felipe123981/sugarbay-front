import HomeView from "../views/HomeView.vue";
import UserView from "../views/UserView.vue";
import ChatView from "../views/ChatView.vue";
//import AnalyticsView from "../views/AnalyticsView.vue";
import OrderView from "../views/OrderView.vue";
import SavedView from "../views/SavedView.vue";
import ConfigView from "../views/ConfigView.vue";
import LoginView from "../views/LoginView.vue";
import ProductRegister from "@/views/ProductRegister.vue";
import SignIn from "@/views/SignIn.vue";
import ShopView from "@/views/ShopView.vue";
import AccountConfirmed from "@/views/AccountConfirmed.vue";
import AboutView from "@/views/AboutView.vue";
//
import Checkout from "@/views/CheckoutView.vue";
//
import Router from "vue-router";
import Vue from "vue";
import { readCookie } from "@/modules/cookie";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/user",
      name: "user",
      component: UserView
    },
    {
      path: "/support",
      name: "support",
      component: ChatView
    },
    /*
    {
      path: "/analytics",
      name: "analytics",
      component: AnalyticsView
    },
    */
    {
      path: "/order",
      name: "order",
      component: OrderView
    },
    {
      path: "/saved",
      name: "saved",
      component: SavedView
    },
    {
      path: "/config",
      name: "config",
      component: ConfigView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/register/:productId?",
      name: "register",
      component: ProductRegister,
      meta: { requiresAuth: true }
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn,
      meta: { requiresAuth: false }
    },
    // param referente ao id do produto
    {
      path: "/product/:productId",
      name: "product",
      component: ShopView
    },
    {
      path: "/account-confirmed",
      name: "account-confirmed",
      component: AccountConfirmed
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    //
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    }
    //
  ]
});

router.beforeEach((to, from, next) => {
  const token = readCookie(document.cookie);
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (!requiresAuth && to.name == "sign-in" && token) {
    if(from.name != null) {
      next(`/${from.name}`);
    }
    else{
      next('/')
    }
  } else {
    next();
  }
  if (requiresAuth && !token) {
    alert("Login required.");
    next("/login");
  } else {
    next();
  }
});

export default router;
