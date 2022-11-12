<template>
    <div v-show="visible" class="form">
        <input placeholder="Payment description" v-model="type">
        <input placeholder="Payment amount" v-model="amount">
        <input placeholder="Payment date" v-model="date">
        <button class="form__addBtn" @click="onAddClick">ADD</button>
    </div>
</template>

<script>
export default {
    name: 'AddPaymentForm',
    props: {
        visible: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    data() {
        return {
            amount: '',
            type: '',
            date: ''
        }
    },

    methods: {
        onAddClick() {
            const regAmount = /^\d+$/
            const regDate = /^\d{2}.\d{2}.\d{4}$/
            if (!regAmount.test(this.amount)) {
                alert('Сумма должна быть задана числом!')
                return
            } else if (!regDate.test(this.date) && this.date) {
                alert('Дата должна быть задана в формате: \'дд.мм.гггг\'!')
                return
            }

            const data = {
                amount: +this.amount,
                type: this.type,
                date: this.date || this.getCurrenrDate
            }
            this.$emit('addNewPayment', data)
        }
    },
    computed: {
        getCurrenrDate() {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()

            return `${d}.${m}.${y}`
        }
    }
}
</script>

<style lang="scss">
.form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    & input {
        height: 28px;
        padding-left: 8px;
        margin-top: 8px;
        min-width: 60%;
    }

    &__addBtn {
        height: 32px;
        min-width: 30%;
        margin-top: 8px;
        background-color: #20B2AA;
        color: white;
        border: none;
    }
}

</style>
