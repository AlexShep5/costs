<template>
    <v-card class="editForm">
        <v-select class="editForm__select" v-model="category" label="Category" :items="categories"></v-select>
        <v-text-field class="editForm__input" v-model="value" label="Value"></v-text-field>
        <v-text-field class="editForm__input" v-model="date" label="Date"></v-text-field>
        <v-btn class="editForm__btn" color="teal" dark @click="onApplyClick">Apply</v-btn>
    </v-card>
    <!-- <div class="editForm">
        <select class="editForm__select" name="category" v-model="category">
            <option class="editForm__optionTitle" selected disabled value="">Select payment description</option>
            <option class="editForm__option" v-for="(item, index) in categories" :key="index" :value="item">{{ item }}</option>
        </select>
        <input class="editForm__input" placeholder="Payment amount" v-model="value">
        <input class="editForm__input" placeholder="Payment date" v-model="date">
        <button class="editForm__btn" @click="onApplyClick">Apply</button>
    </div> -->
</template>

<script>
export default {
    name: 'EditPaymentForm',
    props: {
        payData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    watch: {
        payData: function () {
            this.value = this.payData.value
            this.date = this.payData.date
            this.category = this.payData.category
            this.id = this.payData.id
        }
    },
    data() {
        return {
            value: 0,
            category: '',
            date: '',
            id: 0,
            container: null
        }
    },
    methods: {
        onApplyClick() {
            const regAmount = /^\d+$/
            const regDate = /^\d{2}.\d{2}.\d{4}$/

            if (!this.category) {
                alert('Выберите категорию')
                return
            }else if (!regAmount.test(this. value)) {
                alert('Сумма должна быть задана числом!')
                return
            } else if (!regDate.test(this.date)) {
                alert('Дата должна быть задана в формате: \'дд.мм.гггг\'!')
                return
            }

            const data = {
                id: this.id,
                value: +this.value,
                category: this.category,
                date: this.date
            }

            this.$emit('editPayment', data)
        },
    },
    computed: {
        categories() {
            return this.$store.getters.getCategoriesList
        }
    },
    mounted() {
        this.container = document.querySelector('.editForm')
    }
}
</script>

<style lang="scss">
.editForm {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border: 1px solid lightgrey;
    padding: 16px;
    background-color: white;
    box-sizing: border-box;

    &__input, &__select {
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
        background-color: #fff;
        border: 1px solid lightgray;
        font-size: 0.9em;

        &:hover {
            border: 1px solid #20B2AA;
        }
    }
}



</style>
