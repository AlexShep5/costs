import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categoriesList: [
            'education',
            'entertiment',
            'food',
            'navigation',
            'sport',
        ],
        paymentsList: [
        ],
    },
    getters: {
        getPaymentsList: (state) => {
            return state.paymentsList
        },
        getCategoriesList: (state) => {
            return state.categoriesList
        },
    },
    mutations: {
        addPayment: (state, payload) => {
            state.paymentsList.push(payload)
        },
        setPaymentsList: (state, payload) => {
            state.paymentsList = payload
        }
    },
    actions: {
        fetchData({commit}, data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data)}, 1000)
            }).then(res => {
                commit('setPaymentsList', res)
            })
        }
    },
    modules: {
    }
})
