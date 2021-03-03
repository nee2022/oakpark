import Vue from 'vue';
import VueRouter from 'vue-router';
// import login from '../views/login.vue'

Vue.use(VueRouter);

const routes = [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: login
    // },
    // {
    //     path: '/',
    //     name: 'login',
    //     component: () => import('../views/login.vue'),
    // },
    {
        path: '/',
        name: 'login',
        component: () => import('../views/paymentSuccess.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
