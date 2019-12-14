<template>
    <div class="standard-page">
        <h4>Products</h4>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Unit price</th>
                    <th>Amount</th>
                    <th>Total</th>
                </tr>
            </thead>
            <cart-item v-for="item in items" v-bind:key="item._id" :item="item"></cart-item>
        </table>

        <hr />

        <div>
            <div class="form-group">
                <label>Name, surname*</label>
                <input type="text" class="form-control" v-model="form.name">
            </div>

            <div class="form-group">
                <label>Address*</label>
                <input type="text" class="form-control" v-model="form.address">
            </div>

            <div class="form-group">
                <label>City*</label>
                <input type="text" class="form-control" v-model="form.city">
            </div>

            <div class="form-group">
                <label>Country*</label>
                <input type="text" class="form-control" v-model="form.country">
            </div>

            <div class="form-group">
                <label>Postal code*</label>
                <input type="text" class="form-control" v-model="form.postal_code">
            </div>

            <div class="form-group">
                <label>Comment</label>
                <textarea class="form-control" v-model="form.comment"></textarea>
            </div>
        </div>

        <h5>Delivery option</h5>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                    Delivery by <strong>ParcelDeliveryExperts</strong> - payment upon delivery
                </label>
            </div>
        </div>

        <p class="text-danger" v-if="error">{{ error }}</p>

        <div class="form-group">
            <button class="btn btn-primary" @click="submitOrder">Submit order</button>
        </div>
    </div>
</template>

<script>
import CartItem from './checkout/CartItem'
import get_all_items from '@/services/api/cart_items/get_by_user'
import create_order from '@/services/api/orders/create'

export default {
    components: { CartItem },

    data: () => ({
        items: [],
        error: null,
        form: {
            name: '',
            address: '',
            city: '',
            country: '',
            postal_code: '',
            comment: '',
        }
    }),
    created() {
        get_all_items(this.$store.state.auth.profile._id).then(i => this.items = i);
    },

    methods: {
        submitOrder() {
            this.error = null;

            if (!this.form.name) return this.formError('You must provide your name');
            if (!this.form.address) return this.formError('You must provide a delivery address');
            if (!this.form.city) return this.formError('You must provide the city');
            if (!this.form.country) return this.formError('You must provide the country');
            if (!this.form.postal_code) return this.formError('You must provide the delivery postal code');

            create_order({
                items: this.items,
                details: this.form
            });
        },

        formError(message) {
            this.error = message;
            this.$speak(message);
        }
    }
}
</script>

<style>

</style>