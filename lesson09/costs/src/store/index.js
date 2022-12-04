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
        nextID: 0
    },
    getters: {
        getPaymentsList: (state) => {
            return state.paymentsList
        },
        getCategoriesList: (state) => {
            return state.categoriesList
        },
        getPayment: (state) => (id) => {
            const existItem = state.paymentsList.find(item => item.id == id);
            if (!existItem) {
                return null
            } else {
                return existItem
            }
        },
        getCategoryPay: (state) => {
            const pays = []
            state.categoriesList.forEach(item => {

                const payValue = state.paymentsList.reduce((sum, current) => {

                    if (item == current.category) {
                        return sum + current.value
                    } else {
                        return sum
                    }
                }, 0)
                pays.push(payValue)
            })
            return pays
        }
    },
    mutations: {
        setPaymentsList: (state, payload) => {
            state.paymentsList = payload
            state.nextID = payload.length + 1
        },
        addPayment: (state, payload) => {
            payload.id = state.nextID++
            state.paymentsList.push(payload)
        },
        delPayment: (state, id) => {
            const existItem = state.paymentsList.find(item => item.id == id)
            if (!existItem) {
                return null
            } else {
                const indexItem = state.paymentsList.indexOf(existItem)
                state.paymentsList.splice(indexItem, 1)
            }
        },
        editPayment: (state, data) => {
            const existItem = state.paymentsList.find(item => item.id == data.id)
            if (!existItem) {
                return null
            } else {
                const indexItem = state.paymentsList.indexOf(existItem)
                Vue.set(state.paymentsList, indexItem, data)
            }
        },
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
