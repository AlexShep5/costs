<template>
    <v-container class="list">
        <v-simple-table >
            <template v-slot:default>
                <thead>
                    <tr class="list__item">
                        <th class="text-left"><b>#</b></th>
                        <th class="text-left"><b>Date</b></th>
                        <th class="text-left"><b>Category</b></th>
                        <th class="text-left"><b>Value</b></th>
                        <th class="text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr  class="list__item" v-show="index >= minIndex && index <= maxIndex" v-for="(item, index) in items" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.category }}</td>
                        <td>{{ item.value }}</td>
                        <td class="list__menu"  @click="$modal.show({name: 'edit', elm: $event.target, payItem: item})">&vellip;</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <NavPaginator class="navPaginator" :pagesNum="pagesNum" :itemsNum="itemsNum" @changePage="changePage"></NavPaginator>

    </v-container>
</template>

<script>
import NavPaginator from "./NavPaginator.vue";

export default {
    name: "PaymentsDisplay",
    components: {
        NavPaginator,
    },
    props: {
    },
    watch: {
        itemsNum: function (newVal, oldVal) {
            if (newVal > oldVal || this.currentPage > this.pagesNum) {
                this.currentPage = this.pagesNum
            }
        },
    },
    data() {
        return {
            currentPage: 1,
            recordsInPage: 5
        };
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
        },
    },

    computed: {
        minIndex() {
            return (this.currentPage - 1) * this.recordsInPage;
        },
        maxIndex() {
            return this.minIndex + this.recordsInPage - 1;
        },
        pagesNum() {
            return Math.ceil(this.items.length / this.recordsInPage);
        },
        itemsNum() {
            return this.items.length;
        },
        items() {
            return this.$store.getters.getPaymentsList
        }
    },
    mounted() {
        this.currentPage = this.pagesNum
    }
};
</script>

<style lang="scss">
.list {
    &__item {

        & td, th {
        font-size: 15px !important;
        // border-bottom: 1px solid #66cdaa;
        border-bottom: 1px solid #66cdaa !important;
        }
    }

    &__menu {
        font-weight: 600;
        cursor: pointer;
    }
}

.navPaginator {
    margin-top: 16px;
}
</style>
