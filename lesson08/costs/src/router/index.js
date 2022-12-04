import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AddPaymentPage from '../pages/AddPaymentPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/add/payment/:category?/:value?',
        name: 'addPayment',
        component: AddPaymentPage,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/AboutPage.vue')
    },
    {
        path: '*',
        name: 'error404',
        component: () => import('../pages/Error404Page.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
