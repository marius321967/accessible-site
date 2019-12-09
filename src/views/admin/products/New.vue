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
                        <label>Name</label>
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

export default {
    data : () => ({
        form: { name: '', price: '' },
        error: null,
    }),
    methods: {
        create() {
            this.error = null;

            if (!this.form.name) return this.error = 'You must provide a name of the product';
            if (!this.form.price) return this.error = 'You must provide a price for the product';
            if (this.form.price < 0) return this.error = 'The price cannot be negative';

            create_product(this.form).then(id => this.$router.push(id));
        }
    }
}
</script>
