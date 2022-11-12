<template>
    <div v-show="visible" class="form">
        <select class="form__select" name="category" v-model="category" onfocus='style="color: black"'>
            <option class="form__optionTitle" selected disabled value="">Select payment description</option>
            <option class="form__option" v-for="(item, index) in categories" :key="index" :value="item">{{ item }}</option>
        </select>
        <input class="form__input" placeholder="Payment amount" v-model="value">
        <input class="form__input" placeholder="Payment date" v-model="date">
        <div class="form__buttons">
            <button class="form__btn" @click="onCloseClick">CLOSE</button>
            <button class="form__btn" @click="onAddClick">ADD</button>
        </div>
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
            value: '',
            category: '',
            date: ''
        }
    },

    methods: {
        onAddClick() {
            const regAmount = /^\d+$/
            const regDate = /^\d{2}.\d{2}.\d{4}$/

            if (!this.category) {
                alert('Выберите категорию')
                return
            }else if (!regAmount.test(this. value)) {
                alert('Сумма должна быть задана числом!')
                return
            } else if (!regDate.test(this.date) && this.date) {
                alert('Дата должна быть задана в формате: \'дд.мм.гггг\'!')
                return
            }

            const data = {
                value: +this.value,
                category: this.category,
                date: this.date || this.getCurrenrDate
            }

            this.$store.commit('addPayment', data)
        },
        onCloseClick() {
            this.$emit('closeForm')
        }

    },
    computed: {
        getCurrenrDate() {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()

            return `${d}.${m}.${y}`
        },
        categories() {
            return this.$store.getters.getCategoriesList
        }
    }
}
</script>

<style lang="scss">
.form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 150px;
    left: calc(50% - 150px);
    border: 2px solid #20B2AA;
    padding: 16px;
    z-index: 10;
    background-color: white;
    box-sizing: border-box;

    &__input, &__select {
        height: 28px;
        padding-left: 8px;
        min-width: 250px;
        font-size: 0.9em;
        border: none;
        outline: 1px solid lightgray;
        box-sizing: border-box;

        &:not(:first-child) {
            margin-top: 16px;
        }

        &:focus {
            outline: 1px solid #20B2AA;
        }
    }

    &__select {
        background-color: white;
        color: gray;
    }

    &__optionTitle {
        display: none;
    }

    &__option {
        background-color: white;
    }

    &__buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }

    &__btn {
        height: 32px;
        min-width: 35%;
        background-color: #20B2AA;
        color: white;
        border: none;
    }
}



</style>
