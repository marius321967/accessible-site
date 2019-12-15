<template>
    <li>
        <div v-if="product" class="d-flex">
            <div class="d-inline-block mr-4">
                <span v-if="product">{{ product.name }}</span>
            </div>
            
            <div class="d-inline-block mr-4">
                <span v-if="product">Unit price: {{ product.price }}€</span>
            </div>
            
            <div class="d-inline-block mr-4">
                Amount: <strong>{{ item.amount }}</strong>
            </div>

            <div class="d-inline-block mr-4">
                Total: <strong v-if="product">{{ product.price * item.amount }}€</strong>
            </div>
        </div>
    </li>
</template>

<script>
import get_product_by_id from '@/services/api/products/get_by_id'

export default {
    props: { item: { type: Object, required: true } },
    data: () => ({ product: null }),
    
    mounted() {
        get_product_by_id(this.item.product_id).then(p => this.product = p);
    },
    
    computed: {
        total() {
            if (this.product) return this.product.price * this.item.amount;
        }
    }
}
</script>

<style>

</style>