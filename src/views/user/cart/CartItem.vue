<template>
    <li class="list-group-item d-flex">
        <div class="mr-4">
            <span v-if="product">{{ product.name }}</span>
            -
            <span v-if="product"><strong>{{ product.price }}€</strong></span>
        </div>

        <div class="mr-auto">
            Amount: <strong>{{ item.amount }}</strong>
        </div>

        <div>
            <button class="btn btn-sm btn-danger" @click="removeItem">Remove</button>
        </div>
    </li>
</template>

<script>
import get_product_by_id from '@/services/api/products/get_by_id'
import remove_item from '@/services/api/cart_items/delete'

export default {
    props: { item: { required: true, type: Object } },
    data: () => ({ product: null }),

    mounted() {
        get_product_by_id(this.item.product_id).then(p => this.product = p);
    },

    methods: {
        removeItem() {
            remove_item(this.item._id).then(_ => this.$emit('item-removed'));
        }
    }
}
</script>
