<template>
    <v-container>
        <v-row>
            <v-col :cols="6">
                <v-btn @click="$modal.show({name: 'add'})" color="teal" dark>
                    ADD NEW COST <v-icon>mdi-plus</v-icon>
                </v-btn>
                <div class="mt-1">
                    <v-btn color="#20b2aa" plain :ripple="false" to="/add/payment/sport/200">sport 200</v-btn>
                    <v-btn color="#20b2aa" plain :ripple="false" to="/add/payment/food/300">food 300</v-btn>
                    <v-btn color="#20b2aa" plain :ripple="false" to="/add/payment/entertiment/400">entertiment 400</v-btn>
                </div>
                <PaymentsDisplay class="paymentList"></PaymentsDisplay>
            </v-col>
            <v-col :cols="6">
                <RoundChart class="chart" :chart-data="chartData" :chart-options="chartOptions" />
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
import RoundChart from '@/components/RoundChart.vue'

export default {
    name: 'HomeView',
    components: {
        PaymentsDisplay,
        RoundChart
    },
    watch: {
        categoryPay: function () {
            this.chartUpdate();
        },
    },
    data() {
        return {
            paymentsList: [],
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: ['#E57373', '#F06292', '#BA68C8', '#9575CD', '#7986CB', '#64B5F6', '#4FC3F7', '#4DD0E1', '#4DB6AC'],
                        data: [40, 20, 12, 50, 15]
                    }
                ],
            },
            chartOptions: {
                animation: false,
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                }
            }
        }
    },
    methods: {
        chartUpdate() {
            this.chartData.labels = this.$store.getters.getCategoriesList
            this.chartData.datasets[0].data = this.$store.getters.getCategoryPay
        }
    },
    computed: {
        categoryPay() {
            return this.$store.getters.getCategoryPay
        }
    },
    mounted() {
        const links =  document.querySelectorAll('.addRef')
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                this.$router.push({ name: 'addPayment', params: {category: link.dataset.category , value: link.dataset.value}})
            })
        })
        this.chartUpdate()
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

.chart {
    margin-top: 64px;
}
</style>
