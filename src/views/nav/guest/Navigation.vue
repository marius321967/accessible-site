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
                <li class="nav-item active">
                    <router-link class="nav-link" to="login">
                        Login
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
    data: () => ({ logo })
}
</script>

<style>
.navbar-brand img {
    max-height: 48px;
}
</style>