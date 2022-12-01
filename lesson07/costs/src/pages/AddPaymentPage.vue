<template>
    <div class="addPage">
        <AddPaymentForm class="addPage__form" @addNewPayment="addNewPayment" />
        <div class="addPage__closeBtn" @click="onCloseClick">Close</div>
    </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue'
export default {
    name: 'AddPaymentPage',
    components: {
        AddPaymentForm,
    },
    data() {
        return {
            formVisible: true,
        }
    },
    methods: {
        addNewPayment(data) {
            this.$store.commit('addPayment', data)
            this.$router.push({name: 'home'})
        },
        onCloseClick() {
            this.$router.push({name: 'home'})
        }
    },
}
</script>

<style lang="scss">

.addPage {
    max-width: 300px;
    margin: 0 auto;
    border: 1px solid #20b2aa;
    padding: 16px;
    box-sizing: border-box;

    &__form {
    max-width: 300px;
    }

    &__closeBtn {
        font-size: 14px;
        border: 1px solid #20b2aa;
        width: 50%;
        margin: 16px auto 0;
        padding: 4px 0;
        cursor: default;
    }
}
</style>
