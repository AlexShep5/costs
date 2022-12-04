<template>
    <v-app>
        <v-app-bar flat app>
            <v-btn color="#20b2aa" plain :ripple="false" to="/">Home</v-btn>
            <v-btn color="#20b2aa" plain :ripple="false" to="/about">About</v-btn>
        </v-app-bar>

        <v-main>
            <div class="text-h3 text-center my-4">My personal costs</div>
            <router-view/>
        </v-main>
        <AddModal />
        <EditModal />

    </v-app>
</template>

<script>
import AddModal from '@/components/AddModal.vue'
import EditModal from '@/components/EditModal.vue'

export default {
    name: 'App',
    components: {
        AddModal,
        EditModal
    },
    data() {
        return {
            modalData: {},
            modalID: 0,
            modalPos: {},
        }
    },
    created() {
        const dataObj = [
            { id: 1, date: "20.03.2020", category: "food", value: 350 },
            { id: 2, date: "21.03.2020", category: "navigation", value: 400 },
            { id: 3, date: "22.03.2020", category: "sport", value: 500 },
            { id: 4, date: "23.03.2020", category: "entertiment", value: 800 },
            { id: 5, date: "24.03.2020", category: "education", value: 1000 },
            { id: 6, date: "25.03.2020", category: "food", value: 200 },
            { id: 7, date: "26.03.2020", category: "sport", value: 350 },
        ]
        this.$store.dispatch('fetchData', dataObj)
    },
}

</script>
