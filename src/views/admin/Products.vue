<template>
    <div>
        <p>
            <router-link to="/admin/products/new" class="btn btn-sm btn-success">Create product</router-link>
        </p>

        <div class="row">
            <div class="col-md-4">
                <ul class="list-group">
                    <product-item v-for="product in products" v-bind:key="product._id" :product="product"></product-item>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import get_all_products from '@/services/api/products/get_all'
import ProductItem from './products/ProductItem'

export default {
    components: { ProductItem },
    data: () => ({ products: [] }),
    
    created() {
        get_all_products().then(products => this.products = products);
    }
}
</script>
