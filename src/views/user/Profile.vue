<template>
    <div class="standard-page">
        <h5>User profile</h5>

        <p>Email: <strong>{{ authProfile.email }}</strong></p>

        <h6>Orders</h6>
        <orders-list></orders-list>        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OrdersList from './profile/OrdersList'

export default {
    components: { OrdersList },
    computed: {
        ...mapGetters([ 'authProfile' ])
    }
}
</script>

<style>

</style>