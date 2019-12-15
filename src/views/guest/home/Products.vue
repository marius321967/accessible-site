<template>
    <div class="row">
        <product-preview class="col-md-3" v-for="product in products" v-bind:key="product._id" :product="product">product</product-preview>
    </div>
</template>

<script>
import get_popular_products from '@/services/api/products/get_popular'
import ProductPreview from '@/views/guest/explore/ProductPreview'

export default {
    components: { ProductPreview },
    data: () => ({
        products: []
    }),

    created() {
        get_popular_products().then(p => this.products = p);
    }
}
</script>

<style>

</style>