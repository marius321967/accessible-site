<template>
    <div class="standard-page product-page">
        <div class="row" v-if="product">
            <div class="col-md-6">
                <div class="product-images-container">
                    <aic class="accessible-images" :product-id="id"></aic>
                    <nic class="nonaccessible-images" :product-id="id"></nic>
                </div>

                <h4 class="product-name">{{ product.name }}</h4>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a pharetra quam, et condimentum risus. 
                    Phasellus finibus libero id massa tincidunt bibendum. Suspendisse facilisis diam purus, in viverra 
                    diam faucibus ac. Proin sit amet bibendum lorem. Cras a augue eu ligula tincidunt tempus. 
                </p>
            </div>

            <div class="col-md-6">
                <div class="price-container">
                    <div class="price-label"><span>Price</span></div>
                    <div class="price"><span>{{ product.price }}€</span></div>
                    
                </div>

                <div class="cart-options-container">
                    <button :class="cartButtonClasses" @click="addToCart" :disabled="cartItemAdded">
                        {{ cartItemAdded ? 'Added' : 'Add to cart' }}
                    </button>
                </div>

                <hr>

                <div>
                    <h6>Reviews</h6>
                    <div class="stars">
                        <font-awesome-icon icon="star" />
                        <font-awesome-icon icon="star" />
                        <font-awesome-icon icon="star" />
                        <font-awesome-icon icon="star" />
                        <font-awesome-icon :icon="['far', 'star']" />
                    </div>
                    <p> Average 4 <small> / </small> 5 </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import aic from './product/AccessibleImagesCarousel'
import nic from './product/NonaccessibleImagesCarousel'
import get_product_by_id from '@/services/api/products/get_by_id'
import add_cart_item from "@/services/api/cart_items/add"

export default {
    props: { id: { required: true, type: String } },
    components: { aic, nic },

    data: () => ({
        product: null,
        cartItemAdded: false,
    }),

    mounted() {
        get_product_by_id(this.id).then(p => this.product = p);
    },

    methods: {
        addToCart() {
            add_cart_item({ product_id: this.id, amount: 1 }).then(_ => this.cartItemAdded = true);
        }
    },

    computed: {
        cartButtonClasses() {
            return [ 'btn', (this.cartItemAdded ? 'btn-success' : 'btn-primary') ]
        }
    }
}
</script>

<style lang="scss">
.product-page {
    .product-images-container, .price-container { margin-bottom: 1rem }

    .price-label { font-size: 140% }
    .price { font-size: 200% }

    .stars {
        color: grey;
    }
}

.accessible-images { display: none }
.accessible {
    .accessible-images { display: block }
    .nonaccessible-images { display: none }
}
</style>