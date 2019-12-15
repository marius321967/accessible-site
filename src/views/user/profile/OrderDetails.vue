<template>
    <div>
        <h6>Order <strong>{{ order._id}}</strong></h6>

        <p>
            Name: <strong>{{ order.details.name}}</strong>
        </p>
        
        <p>
            Address: 
            <strong>
                {{ order.details.address }}, {{ order.details.postal_code }}
                {{ order.details.city }}, {{ order.details.country }}
            </strong>
        </p>

        Products:
        <ul>
            <order-product v-for="item in order.items" v-bind:key="item._id" :item="item">
                {{ item.product_id }}
            </order-product>
        </ul>
    </div>
</template>

<script>
import OrderProduct from './OrderProduct'

export default {
    components: { OrderProduct },
    props: { order: { type: Object, required: true } }
}
</script>

<style>

</style>