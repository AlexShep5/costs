<template>
        <div v-show="isShow" class="editModal">
            <div v-if="!isFormShow" class="editModal__item editModal__item_edit" @click="onEditClick">Редактировать</div>
            <div v-if="!isFormShow" class="editModal__item editModal__item_remove"  @click="onRemoveClick">Удалить</div>
            <EditPaymentForm v-show="isFormShow" class="editModal__form" :payData="settings.payItem" @editPayment="onEditPayment"/>
            <div class="editModal__closeBtn" @click="$modal.hide({name: 'edit'})">Close</div>
        </div>
</template>

<script>
import EditPaymentForm from '@/components/EditPaymentForm.vue'

export default {
    name: "EditModal",
    components: {
        EditPaymentForm,
    },
    data () {
        return {
            isShow: false,
            name: 'edit',
            settings: {},
            isFormShow: false
        }
    },
    methods: {
        show(settings) {
            if (settings.name == this.name) {
                this.settings = settings

                const elmPos = this.settings.elm.getBoundingClientRect()
                const modalWin = document.querySelector('.editModal')
                const left = elmPos.right - 250
                const top = elmPos.top + elmPos.height
                modalWin.style.left = left + 'px'
                modalWin.style.top = top + 'px'
                this.isFormShow = false
                this.isShow = true
            }
        },
        hide(settings) {
            if (settings.name == this.name) {
                this.isShow = false
                this.settings = {}
            }
        },
        onRemoveClick() {
            this.$store.commit('delPayment', this.settings.payItem.id)
            this.$modal.hide({name: 'edit'})
        },
        onEditClick() {
            this.isFormShow = true
        },
        onEditPayment(data) {
            this.$store.commit('editPayment', data)
        }
    },
    mounted() {
        this.$modal.EventBus.$on('modalShow', this.show)
        this.$modal.EventBus.$on('modalHide', this.hide)
    }
}
</script>

<style lang="scss">
.editModal {
    position: absolute;
    border: 1px solid #20b2aa;
    padding: 8px;
    box-sizing: border-box;
    background-color: white;
    width: 250px;

    &__item {
        text-align: left;
        display: flex;
        padding: 4px 4px;
        box-sizing: border-box;
        cursor: default;
        font-size: 15px;

        &:hover {
            // border: 1px solid #20b2aa;
            color: #20b2aa;
        }
    }

    &__item_edit::before {
        content: url('../assets/pencil.png');
        padding-right: 12px;
        width: 16px;
    }

    &__item_remove::before {
        content: url('../assets/backet.png');
        padding-right: 12px;
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
