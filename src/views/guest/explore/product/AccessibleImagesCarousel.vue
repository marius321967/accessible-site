import get_accessible_images from '@/services/api/products/get_accessible_images';
<template>
    <b-carousel
    id="carousel-1"
    :interval="5000"
    controls
    indicators
    style="text-shadow: 1px 1px 2px #333;">
        <!-- Text slides with image -->
        <b-carousel-slide :img-src="config.api_root + '/products/' + productId + '/images/' + image._id + '/file'" v-for="image in images" v-bind:key="image._id"></b-carousel-slide>
    </b-carousel>
</template>

<script>
import get_accessible_images from '@/services/api/products/get_accessible_images'
import config from '@/config.json'

export default {
    props: { productId: { required: true, type: String } },
    data: () => ({ images: [], config }),

    mounted() {
        get_accessible_images(this.productId).then(i => this.images = i);
    }
}
</script>
