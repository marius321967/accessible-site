<template>
    <div class="standard-page">
        <h4>Cart</h4>

        <div class="row" v-if="items.length > 0">
            <div class="col-md-6">
                <div class="form-group">
                    <ul class="list-group">
                        <cart-item  
                            v-for="item in items" 
                            v-bind:key="item._id" 
                            :item="item"
                            @item-removed="refreshItemsList"></cart-item>
                    </ul>
                </div>

                <div class="form-group">
                    <router-link to="/checkout" class="btn btn-primary">Checkout</router-link>
                </div>
            </div>
        </div>

        <p v-else><span>
            The product cart is empty.
        </span></p>
    </div>
</template>

<script>
import CartItem from './cart/CartItem'
import get_all_items from '@/services/api/cart_items/get_by_user'

export default {
    components: { CartItem },

    data: () => ({
        items: []
    }),

    created() {
        if (!this.$store.state.auth.profile) return this.$router.push('/');

        this.refreshItemsList();
    },

    methods: {
        refreshItemsList() {
            get_all_items(this.$store.state.auth.profile._id).then(i => {
                this.items = i;

                if (this.items.length == 0) this.$speak('The product cart is empty');
            });
        }
    }
}
</script>
