<template>
    <div class="home">
        <div class="payments">
            <ShowFormButton></ShowFormButton>
            <div class="addRefs">
                <router-link class="addRef" to="/add/payment/sport/200">sport 200</router-link>
                <router-link class="addRef" to="/add/payment/food/300">food 300</router-link>
                <router-link class="addRef" to="/add/payment/entertiment/400">entertiment 400</router-link>
            </div>
            <PaymentsDisplay class="paymentList"></PaymentsDisplay>
        </div>

        <AddModal />
        <EditModal />

    </div>
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import ShowFormButton from '../components/ShowFormButton.vue'
import AddModal from '../components/AddModal.vue'
import EditModal from '../components/EditModal.vue'

export default {
    name: 'HomeView',
    components: {
        PaymentsDisplay,
        ShowFormButton,
        AddModal,
        EditModal
    },
    data() {
        return {
            paymentsList: [],
        }
    },
    methods: {

    },
    mounted() {
        const links =  document.querySelectorAll('.addRef')
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                this.$router.push({ name: 'addPayment', params: {category: link.dataset.category , value: link.dataset.value}})
            })
        })
    }
}
</script>

<style lang="scss">

.payments {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
}

.paymentList {
    margin-top: 16px;
}

.addRefs {
    display: flex;
    align-items: flex-start;
    margin-top: 8px;

    .addRef {
        color: #20B2AA;
        text-decoration: none;
        margin-top: 8px;
        cursor: pointer;

        &:not(:first-child) {
            padding-left: 16px;
        }
    }
}
</style>
