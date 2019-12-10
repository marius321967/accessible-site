<template>
    <div :class="appClasses">
        <router-view />
        
        <b-popover :target="popoverElement" v-if="accessibleMode && popoverElement" :show="true" triggers="manual" placement="bottom">
            <template v-slot:title>Help</template>
            <button class="btn btn-secondary btn-sm" @click="speakSelection">Speak</button>
        </b-popover>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import speak from '@/services/accessibility/speak'

export default {
    beforeCreate() {
        this.$store.dispatch('authLoadToken');
    },
    mounted() {
        const store = this.$store;

        document.addEventListener('selectionchange', e => {
            const currentElement = this.popoverElement;
            const selection = document.getSelection();
            const isDeselected = selection.toString() == '';

            if (isDeselected) store.commit('POPOVER_SET_ELEMENT', null);
            else if (currentElement != selection.focusNode.parentElement) store.commit('POPOVER_SET_ELEMENT', selection.focusNode.parentElement);
        });
    },

    methods: {
        speakSelection() {
            speak( document.getSelection().toString() );
        }
    },

    computed: { 
        ...mapGetters(['popoverElement', 'accessibleMode', 'fontSizeLevel']),
        appClasses() {
            const c = [];
            if (this.accessibleMode) c.push('accessible');
            if (this.fontSizeLevel) c.push('font-size-level-' + this.fontSizeLevel); // See accessible.scss
            return c;
        }
    }
}
</script>

<style lang="scss">
@import 'bootstrap';
@import '@/assets/accessible';

.standard-page {
    @extend .container;
    margin-top: 1rem;
}

.router-link-active {
    @extend .active;
}

</style>
