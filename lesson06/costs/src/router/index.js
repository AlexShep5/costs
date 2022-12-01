import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AddPaymentPage from '../pages/AddPaymentPage.vue'
import EditPaymentPage from '../pages/EditPaymentPage.vue'

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
        path: '/edit/payment/:id/:date/:category/:value',
        name: 'editPayment',
        component: EditPaymentPage,
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
