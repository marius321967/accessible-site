<template>
    <div>
        <h5>Add new product</h5>

        <form>
            <div class="row">
                <div class="col-md-3">
                    
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control form-control-sm" v-model="form.name" />
                    </div>

                    <div class="form-group">
                        <label>Category</label>
                        <select class="form-control form-control-sm" v-model="form.category_id">
                            <option :value="category._id" v-for="category in categories" v-bind:key="category._id">{{ category.name }}</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Price</label>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control form-control-sm" min="0" step="0.01" v-model.number="form.price" />
                            <div class="input-group-append">
                                <span class="input-group-text">€</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-sm btn-primary" type="button" @click="create">Create</button>
            </div>

            <div class="form-group text-danger" v-if="error">
                <strong>{{ error }}</strong>
            </div>

        </form>
    </div>
</template>

<script>
import create_product from '@/services/api/products/create'
import get_all_categories from '@/services/api/categories/get_all'

export default {
    data : () => ({
        form: { name: '', category_id: '', price: '' },
        error: null,
        categories: []
    }),
    methods: {
        create() {
            this.error = null;

            if (!this.form.name) return this.error = 'You must provide a name of the product';
            if (!this.form.category_id) return this.error = 'You must select a product category';
            if (!this.form.price) return this.error = 'You must provide a price for the product';
            if (this.form.price < 0) return this.error = 'The price cannot be negative';

            create_product(this.form).then(id => this.$router.push(id));
        }
    },

    created() {
        get_all_categories().then(categories => this.categories = categories);
    }
}
</script>
