<template>
    <div>
        <router-view />
        
        <b-popover :target="popoverElement" v-if="popoverElement" :show="true" triggers="manual" placement="bottomleft">
            <template v-slot:title>Popover Title</template>
            <button>Speak</button>
        </b-popover>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    beforeCreate() {
        this.$store.dispatch('authLoadToken');
    },
    mounted() {
        const store = this.$store;

        document.addEventListener('selectionchange', e => {
            const isDeselected = document.getSelection().toString() == '';
            const element = document.getSelection().focusNode.parentElement;
            // console.log({ top: element.offsetTop, left: element.offsetLeft });

            if (isDeselected)   store.commit('POPOVER_SET_ELEMENT', null);
            else                store.commit('POPOVER_SET_ELEMENT', element);
        });
    },

    computed: { ...mapGetters(['popoverElement']) }
}
</script>

<style lang="scss">
@import 'bootstrap';

body {
    font-weight: 500;
}

.standard-page {
    @extend .container;
    margin-top: 1rem;
}

label.label {
    text-transform: uppercase;
}

.form-group {
    margin-bottom: 2rem;
}

.primary-links .nav-item .nav-link {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>
