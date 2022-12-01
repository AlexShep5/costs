<template>
    <div class="home">
        <div class="payments">
            <ShowFormButton @showForm="showForm"></ShowFormButton>
            <div class="addRefs">
                <router-link class="addRef" to="/add/payment/sport/200">sport 200</router-link>
                <router-link class="addRef" to="/add/payment/food/300">food 300</router-link>
                <router-link class="addRef" to="/add/payment/entertiment/400">entertiment 400</router-link>

                <!-- <p class="addRef" data-category="sport" data-value="200" href="/add/payment/sport/200">sport 200</p>
                <p class="addRef"  data-category="food" data-value="300" href="/add/payment/food/300">food 300</p>
                <p class="addRef"  data-category="entertiment" data-value="400" href="/add/payment/entertiment/400">entertiment 400</p> -->
            </div>
            <PaymentsDisplay class="paymentList"></PaymentsDisplay>
        </div>
    </div>
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import ShowFormButton from '../components/ShowFormButton.vue'

export default {
    name: 'HomeView',
    components: {
        PaymentsDisplay,
        ShowFormButton,
    },
    data() {
        return {
            paymentsList: [],
        }
    },
    methods: {
        showForm() {
            this.$router.push({ name: 'addPayment' })
        },
        closeForm() {
            this.formVisible = false
        },
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
    flex-direction: column;
    align-items: flex-start;
    margin-top: 8px;

    .addRef {
        color: #2c3e50;
        text-decoration: none;
        margin-top: 8px;
        font-weight: 600;
        cursor: pointer;

        &:hover {
            color: #20B2AA;
        }
    }
}
</style>