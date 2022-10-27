<template>
    <div class="list">
        <div class="list__item">
            <span class="list__number"><b>#</b></span>
            <span class="list__date"><b>Date</b></span>
            <span class="list__category"><b>Category</b></span>
            <span class="list__value"><b>Value</b></span>
        </div>
        <div class="list__item" v-for="item, index in items" :key="index">
            <span class="list__number">{{ index + 1 }}</span>
            <span class="list__date">{{ item.date }}</span>
            <span class="list__category">{{ item.type }}</span>
            <span class="list__value">{{ item.amount }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        items: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.list {
    &__item {
        height: 30px;
        border-bottom: 1px solid #66CDAA;
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
</style>
