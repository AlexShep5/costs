<template>
    <div id="app">
        <h2>My personal costs</h2>
        <div class="payments">
            <ShowFormButton @chengeFormVisible="chengeFormVisible"></ShowFormButton>
            <AddPaymentForm class="addForm" :visible="formVisible" @addNewPayment="addNewPayment"></AddPaymentForm>
            <PaymentsDisplay class="paymentList" :items="paymentsList"></PaymentsDisplay>
        </div>
    </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'
import ShowFormButton from './components/ShowFormButton.vue'

export default {
    name: 'App',
    components: {
        PaymentsDisplay,
        AddPaymentForm,
        ShowFormButton
    },
    data() {
        return {
            paymentsList: [],
            formVisible: false
        }
    },
    methods: {
        addNewPayment(data) {
            this.paymentsList = [...this.paymentsList, data]
        },
        chengeFormVisible() {
            this.formVisible = !this.formVisible
            console.log('click')
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 50px;
    margin-left: 16px;
}

.payments {
    max-width: 500px;
}

.paymentList {
    margin-top: 16px;
}
</style>
