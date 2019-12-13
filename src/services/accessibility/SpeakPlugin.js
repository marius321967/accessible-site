import speak from './speak'

export default {
    install(Vue) {
        Vue.prototype.$speak = function(text) {
            if (this.$store.state.accessibleMode) speak(text);
        }
    }
}