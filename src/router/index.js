import Vue from 'vue'
import VueRouter from 'vue-router'
import Authorization from '../views/Authorization.vue'
import authDb from "../firebase";

Vue.use(VueRouter)

const routes = [{
    path: '*',
    redirect: "/authorization"
}, {
    path: '/',
    redirect: "/authorization"
}, {
    path: '/authorization',
    name: 'Authorization',
    component: Authorization
}, {
    path: '/home',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: {
        requiresAuth: true
    }
}, ]
const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = authDb.currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) next('authorization');
    else if (!requiresAuth && currentUser) next('home');
    else next();
})

export default router