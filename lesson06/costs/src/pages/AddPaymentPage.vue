<template>
    <div class="add">
        <AddPaymentForm class="addForm" :visible="formVisible" @addNewPayment="addNewPayment" @closeForm="closeForm">
        </AddPaymentForm>
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
        },
        closeForm() {
            this.$router.push({name: 'home'})
        }
    },
}
</script>

<style lang="scss">

.addForm {
    max-width: 300px;
    margin: 0 auto;
}

</style>