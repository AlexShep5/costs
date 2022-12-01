<template>
    <div class="home">
        <h2>My personal costs</h2>
        <div class="payments">
            <ShowFormButton @chengeFormVisible="chengeFormVisible"></ShowFormButton>
            <AddPaymentForm class="addForm" :visible="formVisible" @addNewPayment="addNewPayment" @closeForm="closeForm"></AddPaymentForm>
            <PaymentsDisplay class="paymentList" :items="paymentsList"></PaymentsDisplay>
        </div>
    </div>
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import ShowFormButton from '../components/ShowFormButton.vue'

export default {
    name: 'HomeView',
    components: {
        PaymentsDisplay,
        AddPaymentForm,
        ShowFormButton,
    },
    data() {
        return {
            paymentsList: [],
            formVisible: false
        }
    },
    methods: {
        addNewPayment(data) {
            this.paymentsList.push(data)
        },
        chengeFormVisible() {
            this.formVisible = true
        },
        closeForm() {
            this.formVisible = false
        }
    },
    mounted() {
        const dataObj = [
            {id: 1, date: "20.03.2020", category: "food", value: 169},
            {id: 2, date: "21.03.2020", category: "navigation", value: 50},
            {id: 2, date: "22.03.2020", category: "sport", value: 450},
            {id: 4, date: "23.03.2020", category: "entertiment", value: 969},
            {id: 5, date: "24.03.2020", category: "education", value: 1500},
            {id: 6, date: "25.03.2020", category: "food", value: 200},
        ]

        this.$store.dispatch('fetchData', dataObj)
    }
}
</script>

<style lang="scss">

.payments {
    max-width: 500px;
}

.paymentList {
    margin-top: 16px;
}

</style>
