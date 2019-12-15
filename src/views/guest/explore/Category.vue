<template>
    <div class="standard-page">
        <h4 class="text-center" v-if="category">{{ category.name }}</h4>

        <hr>

        <div class="row" v-if="products && products.length > 0">
            <product-preview class="col-md-3" v-for="product in products" v-bind:key="product._id" :product="product"></product-preview>
        </div>

        <div v-else>
            <p><span>No products were found in this category.</span></p>
        </div>
    </div>
</template>

<script>
import get_category_by_id from '@/services/api/categories/get_by_id'
import get_products_by_category from '@/services/api/products/get_by_category'
import ProductPreview from './ProductPreview'

export default {
    props: { id: { type: String, required: true } },
    components: { ProductPreview },

    data: () => ({ category: null, products: [] }),

    mounted() {
        get_category_by_id(this.id).then(c => {
            this.category = c;
            this.$speak(c.name);
        });
        get_products_by_category(this.id).then(p => {
            this.products = p;
            if (p.length == 0) this.$speak('No products were found in this category.');
        })
    }
}
</script>

<style lang="scss">
.category-product-container {
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

.accessible {
    .product-name {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 110%;
    }
}
</style>