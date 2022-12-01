<template>
    <div class="addForm">
        <select class="addForm__select" name="category" v-model="category" @focus="onChangeCategory">
            <option class="addForm__optionTitle" selected disabled value="">Payment description</option>
            <option class="addForm__option" v-for="(item, index) in categories" :key="index" :value="item">{{ item }}</option>
        </select>
        <input class="addForm__input" placeholder="Payment amount" v-model="value">
        <input class="addForm__input" placeholder="Payment date" v-model="date">
        <button class="addForm__btn" @click="onAddClick">Add</button>
    </div>
</template>

<script>
export default {
    name: 'AddPaymentForm',
    data() {
        return {
            value: '',
            category: '',
            date: '',
            container: null
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
                id: 0,
                value: +this.value,
                category: this.category,
                date: this.date || this.getCurrenrDate
            }

            this.$emit('addNewPayment', data)
        },
        onChangeCategory() {
            const elm = this.container.querySelector('.addForm__select')
            elm.classList.add('addForm__select_blackText')
        }

    },
    computed: {
        getCurrenrDate() {
            const today = new Date()
            return today.toLocaleDateString()
        },
        categories() {
            return this.$store.getters.getCategoriesList
        }
    },
    mounted() {
        this.container = document.querySelector('.addForm')
        this.value = this.$route.params.value
        if (this.$route.params.category) {
            this.category = this.$route.params.category
            const elm = this.container.querySelector('.addForm__select')
            elm.classList.add('addForm__select_blackText')
        }
    }
}
</script>

<style lang="scss">
.addForm {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: 1px solid lightgray;
    padding: 16px;
    background-color: white;
    box-sizing: border-box;

    &__input, &__select {
        height: 28px;
        padding-left: 8px;
        width: 100%;
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

        &:hover {
            outline: 1px solid #20B2AA;
        }
    }

    &__select {
        background-color: white;
        color: gray;

        &_blackText {
            color: inherit;
        }
    }

    &__optionTitle {
        display: none;
    }

    &__option {
        background-color: white;
    }

    &__btn {
        min-width: 50%;
        padding: 4px 0;
        margin-top: 16px;
        border: 1px solid lightgrey;
        background-color: #fff;
        font-size: 0.9em;

        &:hover {
            border: 1px solid #20B2AA;
        }

    }
}
</style>
