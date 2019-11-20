<template>
    <div>
        <guest-nav></guest-nav>
        <router-view />
    </div>
</template>

<script>
import GuestNav from './nav/guest/Navigation'

export default {
    components: { GuestNav }
}
</script>
