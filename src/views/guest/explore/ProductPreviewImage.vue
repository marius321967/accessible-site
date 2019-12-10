<template>
    <div>
        <img class="accessible-image" :src="accessibleImageSrc" v-if="accessibleImageSrc">
        <img class="nonaccessible-image" :src="nonaccessibleImageSrc" v-if="nonaccessibleImageSrc">
    </div>
</template>

<script>
import get_accessible_images  from '@/services/api/products/get_accessible_images'
import get_nonaccessible_images  from '@/services/api/products/get_nonaccessible_images'
import config from '@/config.json'

export default {
    props: { productId: { required: true, type: String } },

    data: () => ({ accessibleImages: [], nonaccessibleImages: [] }),

    computed: {
        accessibleImageId() {
            if (this.accessibleImages.length > 0) return this.accessibleImages[0]._id;

            return '5defd8907241ce3f6c870ad7';
        },
        accessibleImageSrc() {
            if (this.accessibleImageId) 
                return config.api_root + '/products/' + this.productId + '/images/' + this.accessibleImageId + '/file';
        },
        nonaccessibleImageId() {
            if (this.nonaccessibleImages.length > 0) return this.nonaccessibleImages[0]._id;

            return '5defd8907241ce3f6c870ad7';
        },
        nonaccessibleImageSrc() {
            if (this.nonaccessibleImageId) 
                return config.api_root + '/products/' + this.productId + '/images/' + this.nonaccessibleImageId + '/file';
        },
    },

    mounted() {
        get_accessible_images(this.productId).then(images => this.accessibleImages = images);
        get_nonaccessible_images(this.productId).then(images => this.nonaccessibleImages = images);
    }
}
</script>

<style lang="scss">
.accessible-image { display: none }
.accessible {
    .accessible-image { display: block }
    .nonaccessible-image { display: none }
}
</style>