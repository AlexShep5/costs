<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <h1 class="appTitle">My personal costs</h1>
        <router-view />
        <ModalWindow class="modalWin" v-show="showModalWin"></ModalWindow>
    </div>
</template>

<script>
import ModalWindow from './components/ModalWindow.vue'

export default {
    name: 'App',
    components: {
        ModalWindow
    },
    data() {
        return {
            modalData: {},
            showModalWin: false,
            modalID: 0,
            modalPos: {},
        }
    },
    methods: {
        onModalShow(elm, id) {
            this.showModalWin = true
            this.modalID = id
            const elmPos = elm.getBoundingClientRect();
            const modalWin = document.querySelector('.modalWin')
            const left = elmPos.right - 160
            const top = elmPos.top + elmPos.height

            modalWin.style.left = left + 'px'
            modalWin.style.top = top + 'px'

        },
        onModalHide() {
            this.showModalWin = false
        },
        onModalRemove() {
            this.$store.commit('delPayment', this.modalID)
        },
        onModalEdit() {
            const payment = this.$store.getters.getPayment(this.modalID)
            this.$router.push({ name: 'editPayment', params: {id: `${payment.id}`,
            date: `${payment.date}`, category: `${payment.category}`, value: `${payment.value}`}} )
        }
    },
    created() {
        const dataObj = [
            { id: 1, date: "20.03.2020", category: "food", value: 160 },
            { id: 2, date: "21.03.2020", category: "navigation", value: 50 },
            { id: 3, date: "22.03.2020", category: "sport", value: 450 },
            { id: 4, date: "23.03.2020", category: "entertiment", value: 900 },
            { id: 5, date: "24.03.2020", category: "education", value: 1500 },
            { id: 6, date: "25.03.2020", category: "food", value: 200 },
            { id: 7, date: "26.03.2020", category: "sport", value: 350 },
        ]
        this.$store.dispatch('fetchData', dataObj)
    },
    mounted() {
        this.$modal.EventBus.$on('show', this.onModalShow)
        this.$modal.EventBus.$on('hide', this.onModalHide)
        this.$modal.EventBus.$on('remove', this.onModalRemove)
        this.$modal.EventBus.$on('edit', this.onModalEdit)
    }
}

</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            // color: #42b983;
            color: #20B2AA;
        }
    }
}

.appTitle {
    margin: 0 0 24px;
}
</style>
