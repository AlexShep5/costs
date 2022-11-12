<template>
    <div class="showBtn">
        <button class="showBtn__button" @click="onShowClick">ADD NEW COST</button>
    </div>

</template>

<script>
export default {
    name: 'ShowFormButton',
    data() {
        return {

        }
    },
    methods: {
        onShowClick() {
            this.$emit('chengeFormVisible')
        }
    },
}

</script>

<style lang="scss">
.showBtn {
    &__button {
        min-width: 30%;
        height: 32px;
        background-color: #20B2AA;
        color: white;
        border: none;
    }
}

</style>
