<template>
    <div class="list">
        <div class="list__item">
            <span class="list__number"><b>#</b></span>
            <span class="list__date"><b>Date</b></span>
            <span class="list__category"><b>Category</b></span>
            <span class="list__value"><b>Value</b></span>
        </div>
        <div v-show="index >= minIndex && index <= maxIndex" class="list__item" v-for="(item, index) in items" :key="index">
            <span class="list__number">{{ index + 1 }}</span>
            <span class="list__date">{{ item.date }}</span>
            <span class="list__category">{{ item.category }}</span>
            <span class="list__value">{{ item.value }}</span>
        </div>
        <NavPaginator class="navPaginator" :pagesNum="pagesNum" :itemsNum="itemsNum" :recordsInPage="recordsInPage" @changePage="changePage"></NavPaginator>
    </div>
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
        items: function () {
            this.currentPage = this.pagesNum;
        },
    },
    data() {
        return {
            currentPage: 1,
            recordsInPage: 3
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
};
</script>

<style lang="scss">
.list {
    &__item {
        height: 30px;
        border-bottom: 1px solid #66cdaa;
        display: flex;
        align-items: center;
    }

    &__number {
        width: 10%;
    }

    &__date {
        width: 30%;
    }

    &__category {
        width: 50%;
    }

    &__value {
        width: 10%;
    }
}

.navPaginator {
    margin-top: 16px;
}
</style>
