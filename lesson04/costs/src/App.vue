<template>
    <div id="app">
        <HomeView></HomeView>
    </div>
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
    name: 'App',
    components: {
        HomeView
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 50px auto 0;
    max-width: 1040px;
    position: relative;
}
</style>
