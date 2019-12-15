<template>
    <div>
        <div class="category-product-container">
            <router-link tag="div" class="product-inner" :to="'/products/' + product._id">
                <div class="product-image-container">
                    <product-preview-image :product-id="product._id"  :alt="'Image of ' + product.name"></product-preview-image>
                </div>

                <div class="product-details-container">
                    <div class="product-name">{{ product.name }}</div>
                    <div class="product-price">{{ product.price }}€</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import ProductPreviewImage from '@/views/guest/explore/ProductPreviewImage'

export default {
    components: { ProductPreviewImage },
    props: { product: { type: Object, required: true } }
}
</script>

<style lang="scss">
.category-product-container {
    margin-bottom: 1rem;
    
    .product-inner {
        border: 1px solid lightgrey;
        text-align: center;
        border-radius: .25rem;
        cursor: pointer;

        .product-image-container {
            overflow: hidden;
            height: 200px;
            img { width: 100% }
        }

        .product-details-container {
            border-top: 1px solid lightgrey;
            padding: 1rem;
        }

        .product-name {
            margin-bottom: .5rem;
        }

        .product-price {
            font-size: 120%;
            font-weight: 400;
        }
    }
}
</style>