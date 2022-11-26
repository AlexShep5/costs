export default {
    install (Vue) {
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$modal = {
            EventBus: new Vue(),
            show(elm, id) {
                this.EventBus.$emit('show', elm, id)
            },
            hide() {
                this.EventBus.$emit('hide')
            },
            remove() {
                this.EventBus.$emit('remove')
            },
            edit() {
                this.EventBus.$emit('edit')
            }
        }
    }
}