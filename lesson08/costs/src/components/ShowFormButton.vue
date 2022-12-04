<template>
    <div class="showBtn">
        <button class="showBtn__button" @click="$modal.show({name: 'add'})">ADD NEW COST</button>
    </div>

</template>

<script>
export default {
    name: 'ShowFormButton',
}

</script>

<style lang="scss">
.showBtn {
    &__button {
        min-width: 30%;
        padding: 8px;
        border: 1px solid #20B2AA;
        color: #20B2AA;
        background-color: #fff;
        font-size: 14px;
        font-weight: 600;
    }
}

</style>
