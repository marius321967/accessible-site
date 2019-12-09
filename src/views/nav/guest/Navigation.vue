<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">
            <!-- <img :src="logo" alt="The website logo" /> -->
            Logo
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse primary-links" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Explore</router-link>
                </li>
            </ul>
            
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <font-awesome-icon icon="wheelchair" />
                    </a>
                </li>
                <li class="nav-item active" v-if="!authToken">
                    <router-link class="nav-link" to="login">
                        Login
                    </router-link>
                </li>
                <li class="nav-item active" v-if="!authToken">
                    <router-link class="nav-link" to="register">
                        Register
                    </router-link>
                </li>
                <li class="nav-item active" v-if="authProfile && authProfile.is_admin == true">
                    <router-link to="/admin" class="nav-link">
                        Administration
                    </router-link>
                </li>
                <li class="nav-item active" v-if="authProfile">
                    <a href="#" class="nav-link">
                        {{ authProfile.email }}
                    </a>
                </li>
                <li class="nav-item active" v-if="authToken">
                    <a href="#" class="nav-link" @click="logout">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import logo from '@/assets/logo.png'
import { mapGetters } from 'vuex'

export default {
    data: () => ({ logo }),

    computed: {
        ...mapGetters([ 'authToken', 'authProfile' ])
    },
    methods: {
        logout() {
            this.$store.dispatch('authRemoveToken');
        }
    }
}
</script>

<style>
.navbar-brand img {
    max-height: 48px;
}
</style>