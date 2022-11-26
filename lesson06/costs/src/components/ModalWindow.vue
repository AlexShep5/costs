<template>
        <div class="modal">
            <div class="modal__item modal__item_edit" @click="onEditClick">Редактировать</div>
            <div class="modal__item modal__item_remove"  @click="onRemoveClick">Удалить</div>
            <div class="modal__closeBtn" @click="onCloseClick">Close</div>
        </div>
</template>

<script>
export default {
    name: "ModalWindow",
    methods: {
        onCloseClick() {
            this.$modal.hide()
        },
        onRemoveClick() {
            this.$modal.remove()
            this.onCloseClick()
        },
        onEditClick() {
            this.$modal.edit()
            this.onCloseClick()
        }
    },
}
</script>

<style lang="scss">
.modal {
    position: absolute;
    border: 1px solid #20b2aa;
    padding: 8px;
    box-sizing: border-box;
    background-color: white;
    width: 200px;

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