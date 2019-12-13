<template>
    <div>
        <guest-nav></guest-nav>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
import GuestNav from './nav/guest/Navigation'

export default {
    components: { GuestNav }
}
</script>
