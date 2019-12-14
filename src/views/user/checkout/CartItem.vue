<template>
    <tr>
        <td>
            <span v-if="product">{{ product.name }}</span>
        </td>
        
        <td>
            <span v-if="product">{{ product.price }}€</span>
        </td>
        
        <td>
            {{ item.amount }}
        </td>

        <td>
            <strong v-if="product">{{ product.price * item.amount }}€</strong>
        </td>
    </tr>
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
