<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">
            <!-- <img :src="logo" alt="The website logo" /> -->
            Logo
        </router-link>
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="primary-links">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" v-for="category in categories" v-bind:key="category._id">
                    <router-link class="nav-link" :to="'/categories/' + category._id">
                        {{ category.name }}
                    </router-link>
                </li>
            </ul>
            
            <ul class="navbar-nav">
                <li class="nav-item active" v-if="!authToken">
                    <router-link class="nav-link" to="/login">
                        Login
                    </router-link>
                </li>
                <li class="nav-item active" v-if="!authToken">
                    <router-link class="nav-link" to="/register">
                        Register
                    </router-link>
                </li>
                <li class="nav-item active" v-if="authProfile && authProfile.is_admin == true">
                    <router-link to="/admin" class="nav-link">
                        Administration
                    </router-link>
                </li>
                <li class="nav-item active" v-if="authProfile">
                    <router-link to="/cart" class="nav-link">
                        Cart
                    </router-link>
                </li>
                <li class="nav-item active" v-if="authProfile">
                    <router-link to="/profile" class="nav-link">
                        {{ authProfile.email }}
                    </router-link>
                </li>
                <li class="nav-item active" v-if="authToken">
                    <a href="#" class="nav-link" @click="logout">
                        Logout
                    </a>
                </li>
                
                <li class="nav-item active" v-if="accessibleMode">
                    <a class="nav-link" href="#" @click="decreaseFontSize">
                        -
                    </a>
                </li>
                <li class="nav-item active" v-if="accessibleMode">
                    <a class="nav-link" href="#" @click="increaseFontSize">
                        +
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#" @click="toggleAccessibleModeSpeak">
                        <font-awesome-icon icon="wheelchair" />
                    </a>
                </li>
            </ul>
        </b-collapse>
    </nav>
</template>

<script>
import logo from '@/assets/logo.png'
import { mapGetters, mapActions } from 'vuex'
import get_all_categories from '@/services/api/categories/get_all'

export default {
    data: () => ({ logo, categories: [] }),

    computed: {
        ...mapGetters([ 'authToken', 'authProfile', 'accessibleMode' ])
    },
    methods: {
        logout() {
            this.$store.dispatch('authRemoveToken');
        },
        ...mapActions(['toggleAccessibleMode', 'decreaseFontSize', 'increaseFontSize']),
        toggleAccessibleModeSpeak() {
            this.toggleAccessibleMode() 
            .then(newState => {
                if (newState == true) this.$speak('Accessibility mode enabled');
            });
        }
    },

    created() {
        get_all_categories().then(categories => this.categories = categories);
    }
}
</script>

<style>
.navbar-brand img {
    max-height: 48px;
}
#navbarSupportedContent, #nav-collapse {
    flex-wrap: wrap;
    max-width: 100%;
}
</style>