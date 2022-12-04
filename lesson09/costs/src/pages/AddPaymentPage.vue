<template>
    <v-card class="addPage" flat>
        <AddPaymentForm class="addPage__form" @addNewPayment="addNewPayment" />
        <v-card-actions>
            <v-btn class="addPage__closeBtn" color="teal" dark :ripple="false" width="50%" @click="onCloseClick">Close</v-btn>
        </v-card-actions>
    </v-card>
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
    border: 1px solid lightgrey !important;
    padding: 16px;
    box-sizing: border-box;

    &__form {
    max-width: 300px;
    }

    &__closeBtn {
        font-size: 14px;
        width: 50%;
        margin: 12px auto 0;
        padding: 4px 0;
        cursor: default;
    }
}
</style>
