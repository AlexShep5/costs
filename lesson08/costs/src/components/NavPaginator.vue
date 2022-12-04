<template>
    <div v-show="pagesNum > 1" class="paginator">
        <span class="paginator__page" @click="onPrevPageClick">&lt;</span>
        <span class="paginator__page" v-for="page in pagesNum" :key="page" @click="onPageClick(page)">{{ page }}</span>
        <span class="paginator__page" @click="onNextPageClick">&gt;</span>
    </div>
</template>

<script>
export default {
    name: "NavPaginator",
    props: {
        pagesNum: {
            type: Number,
            default() {
                return 1;
            },
        },
        itemsNum: {
            type: Number,
            default() {
                return 0;
            },
        },
    },
    watch: {
        itemsNum: function (newVal, oldVal) {
            if (newVal > oldVal) {
                    setTimeout(() => {
                    this.currentPage = this.pagesNum
                    this.pageFocus()
                }, 500)
            }

        },
    },
    data() {
        return {
            container: null,
            currentPage: 1,
        };
    },
    methods: {
        pageFocus() {
            const elms = this.container.querySelectorAll(".paginator__page");
            for (const elm of elms) {
                elm.classList.remove("selectPage");
            }
            this.container
                .querySelector(`.paginator__page:nth-child(${this.currentPage + 1})`)
                .classList.add("selectPage");
        },
        onPageClick(page) {
            this.currentPage = page;
            this.pageFocus();
            this.$emit("changePage", this.currentPage);
        },
        onPrevPageClick() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.pageFocus();
                this.$emit("changePage", this.currentPage);
            }
        },
        onNextPageClick() {
            if (this.currentPage < this.pagesNum) {
                this.currentPage++;
                this.pageFocus();
                this.$emit("changePage", this.currentPage)
            }
        },
    },
    mounted() {
        this.container = document.querySelector(".paginator")
        this.currentPage = this.pagesNum
        this.pageFocus()
    },
    updated() {
        this.currentPage = this.pagesNum
        this.pageFocus()
    },
}
</script>

<style lang="scss">
.paginator {
    display: flex;
    justify-content: center;
    padding: 8px 0;
    border: 1px solid lightgray;

    &__page {
        padding: 0 6px;
        text-align: center;
        cursor: pointer;
        color: black;
        user-select: none;
    }
}

.selectPage {
    color: #20b2aa;
}
</style>
