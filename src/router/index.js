
import HomeView from '../views/HomeView.vue';
import UserView from '../views/UserView.vue';
import ChatView from  '../views/ChatView.vue';
import AnalyticsView from   '../views/AnalyticsView.vue';
import OrderView from   '../views/OrderView.vue';
import SavedView from '../views/SavedView.vue';
import ConfigView from '../views/ConfigView.vue';
import LoginView from '../views/LoginView.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import ProductRegister from '@/views/ProductRegister.vue';
import SignIn from '@/views/SignIn.vue'
import ShopView from "@/views/ShopView.vue"
import Router from 'vue-router';
import Vue from "vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/user',
            name: 'user',
            component: UserView
        },
        {
            path: '/support',
            name: 'support',
            component: ChatView
        },
        {
            path: '/analytics',
            name: 'analytics',
            component: AnalyticsView
        },
        {
            path: '/order',
            name: 'order',
            component: OrderView
        },
        {
            path: '/saved',
            name: 'saved',
            component: SavedView
        },
        {
            path: '/config',
            name: 'config',
            component: ConfigView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/forgot',
            name: 'forgot',
            component: ForgotPassword,
        },
        {
            path: '/register',
            name: 'register',
            component: ProductRegister,
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: SignIn,
        },
        //lembre-se de adiocionar o param referente ao id do produto 
        {
            path: '/shop',
            name: 'shop',
            component: ShopView,
        }
    ]
})
