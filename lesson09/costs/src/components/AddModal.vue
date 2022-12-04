<template>
    <v-dialog v-model="isShow" width="300px">
        <v-card>
        <AddPaymentForm @addNewPayment="addNewPayment"/>
        <v-card-actions>
        <v-btn class="addModal__closeBtn" color="teal" dark :ripple="false" width="50%" @click="$modal.hide({name: 'add'})">Close</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
        <!-- <div v-show="isShow" class="addModal">
            <AddPaymentForm @addNewPayment="addNewPayment"/>
            <v-btn class="addModal__closeBtn" color="teal" dark :ripple="false" @click="$modal.hide({name: 'add'})">Close</v-btn>
        </div> -->
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm.vue'

export default {
    name: "AddModal",
    components: {
        AddPaymentForm,
    },
    data () {
        return {
            isShow: false,
            name: 'add'
        }
    },
    methods: {
        show(settings) {
            if (settings.name == this.name) {
                this.isShow = true
            }
        },
        hide(settings) {
            if (settings.name == this.name) {
                this.isShow = false
            }
        },
        addNewPayment(data) {
            this.$store.commit('addPayment', data)
        },
    },
    mounted() {
        this.$modal.EventBus.$on('modalShow', this.show)
        this.$modal.EventBus.$on('modalHide', this.hide)
    }
}
</script>

<style lang="scss">

.addModal {
    // color: lightcoral;
    // width: 250px !important;
    // position: absolute;
    // top: 250px;
    // left: calc(50% - 125px);
    // border: 1px solid #20b2aa;
    // padding: 8px;
    // box-sizing: border-box;
    // background-color: white !important;
    // margin-right: 100px;

    &__item {
        text-align: left;
        display: flex;
        padding: 4px 4px;
        box-sizing: border-box;
        cursor: default;

        &:hover {
            // border: 1px solid #20b2aa;
            color: #20b2aa;
        }
    }


    &__item_edit::before {
        content: url('../assets/pencil.png');
        padding-right: 8px;
        width: 16px;
    }

    &__item_remove::before {
        content: url('../assets/backet.png');
        padding-right: 8px;
        width: 16px;
    }

    &__closeBtn {
        font-size: 14px;
        border: 1px solid #20b2aa;
        width: 50%;
        margin: 8px auto;
        padding: 4px 0;
        cursor: default;
        display: block;
    }
}
</style>
