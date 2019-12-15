<template>
    <div class="list-group">
        <order-details v-for="order in orders" v-bind:key="order._id" class="list-group-item" :order="order"></order-details>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import get_orders_by_user  from '@/services/api/orders/get_by_user'
import OrderDetails from './OrderDetails'

export default {
    components: { OrderDetails },
    data: () => ({
        orders: []
    }),

    created() {
        get_orders_by_user().then(o => this.orders = o);
    }
}
</script>
