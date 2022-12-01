<template>
        <div v-show="isShow" class="addModal">
            <AddPaymentForm @addNewPayment="addNewPayment"/>
            <div class="addModal__closeBtn" @click="$modal.hide({name: 'add'})">Close</div>
        </div>
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
    width: 250px;
    position: absolute;
    top: 250px;
    left: calc(50% - 125px);
    border: 1px solid #20b2aa;
    padding: 8px;
    box-sizing: border-box;
    background-color: white;

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
    }
}
</style>
