<template>
    <div>
        <p>
            <router-link to="./">Go back</router-link>
        </p>
        
        <h4>Edit product</h4>

        <div class="row" v-if="product">
            <div class="col-md-4">
                <form v-if="product">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control form-control-sm" v-model="product.name" />
                    </div>
                    
                    <div class="form-group">
                        <label>Category</label>
                        <select class="form-control form-control-sm" v-model="product.category_id">
                            <option :value="category._id" v-for="category in categories" v-bind:key="category._id">{{ category.name }}</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Price</label>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" min="0" step="0.01" v-model.number="product.price" />
                            <div class="input-group-append">
                                <span class="input-group-text">€</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-sm btn-primary" type="button" @click="save">Save</button>
                    </div>

                    <div class="form-group text-danger" v-if="error">
                        <strong>{{ error }}</strong>
                    </div>
                </form>
             </div>

            <div class="col-md-8">
                <product-images-form :product-id="id" :product="product"></product-images-form>
            </div>
        </div>
    </div>
</template>

<script>
import get_product_by_id from '@/services/api/products/get_by_id'
import update_product from '@/services/api/products/update'
import get_all_categories from '@/services/api/categories/get_all'
import ProductImagesForm from './ProductImagesForm'

export default {
    props: { id: { required: true, type: String } },
    components: { ProductImagesForm },

    data: () => ({
        product: null,
        error: null,
        categories: [],
    }),

    methods: {
        save() {
            update_product(this.id, this.product);
        },
    },

    mounted() {
        get_product_by_id(this.id).then(product => {
            delete product._id;
            this.product = product;
        });
        get_all_categories().then(categories => this.categories = categories);
    }
}
</script>
