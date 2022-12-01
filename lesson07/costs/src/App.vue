<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
        <h1 class="appTitle">My personal costs</h1>
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            modalData: {},
            modalID: 0,
            modalPos: {},
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
