<template>
    <li class="list-group-item d-flex cart-item">
        <div class="mr-4">
            <span v-if="product">{{ product.name }}</span>
            -
            <span v-if="product"><strong>{{ product.price }}€</strong></span>
        </div>

        <div class="mr-4" v-if="accessibleMode">
            Amount: <strong>{{ item.amount }}</strong>
        </div>

        <div class="mr-4" v-if="item.amount != 1">
            Total: <strong>{{ total }}€</strong>
        </div>
        
        <div class="ml-auto">
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-secondary" @click="decrementAmount">-</button>
                    <button class="btn btn-secondary" @click="incrementAmount">+</button>
                </div>
                
                <input type="text" class="form-control amount-input" :value="item.amount" disabled />

                <div class="input-group-append">
                    <button class="btn btn-danger" @click="removeItem">Remove</button>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import get_product_by_id from '@/services/api/products/get_by_id'
import remove_item from '@/services/api/cart_items/delete'
import update_item_amount from '@/services/api/cart_items/update_amount'
import { mapGetters } from 'vuex'

export default {
    props: { item: { required: true, type: Object } },
    data: () => ({ product: null }),

    mounted() {
        get_product_by_id(this.item.product_id).then(p => this.product = p);
    },

    methods: {
        removeItem() {
            remove_item(this.item._id).then(_ => this.$emit('item-removed'));
        },
        decrementAmount() {
            this.item.amount--;
            update_item_amount(this.item._id, this.item.amount);
        },
        incrementAmount() {
            this.item.amount++;
            update_item_amount(this.item._id, this.item.amount);
        }
    },

    computed: {
        total() {
            if (this.product) return this.product.price * this.item.amount;
        },
        ...mapGetters([ 'accessibleMode' ])
    }
}
</script>

<style lang="scss">
.cart-item {
    .input-group .btn { height: fit-content }
    .amount-input {
        max-width: 4rem;
    }
}

.accessible .cart-item {
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>