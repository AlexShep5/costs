<template>
    <div class="add">
        <EditPaymentForm class="addForm" :visible="formVisible" @editPayment="editPayment" @closeForm="closeForm">
        </EditPaymentForm>
    </div>
</template>

<script>
import EditPaymentForm from '../components/EditPaymentForm.vue'
export default {
    name: 'EditPaymentPage',
    components: {
        EditPaymentForm,
    },
    data() {
        return {
            formVisible: true,
        }
    },
    methods: {
        editPayment(data) {
            this.$store.commit('editPayment', data)
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