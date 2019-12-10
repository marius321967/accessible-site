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
                    <div class="price-label">Price</div>
                    <div class="price">{{ product.price }}€</div>
                    
                </div>

                <div class="cart-options-container">
                    <button class="btn btn-primary">Add to cart</button>
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

export default {
    props: { id: { required: true, type: String } },
    components: { aic, nic },

    data: () => ({
        product: null,
    }),

    mounted() {
        get_product_by_id(this.id).then(p => this.product = p);
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