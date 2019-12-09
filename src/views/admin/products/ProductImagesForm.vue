<template>
    <div>
        <h5>Images</h5>

        <div class="product-images-container row">
            <div class="col-md-3" v-for="image in images" v-bind:key="image._id">
                <div class="product-image">
                    <img :src="config.api_root + '/products/' + product._id + '/images/' + image._id + '/file'" />

                    <font-awesome-icon icon="wheelchair" class="accessible-flag" v-if="image.accessible" />
                    
                    <div class="product-image-control">
                        <button type="button" @click="deleteImage(image._id)" class="btn btn-danger form-control">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <form>
            <h6>Add Image</h6>

            <div class="form-group">
                <input type="file" @change="updateSelectedFile" />
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="uploadForm_accessible" v-model="uploadForm.accessible" />
                <label class="form-check-label" for="uploadForm_accessible">
                    For accessible mode
                </label>
            </div>

            <div class="form-group"><button type="button" class="btn btn-sm btn-primary" @click="addImage">Add</button></div>

            <div class="form-group text-danger" v-if="error"><strong>{{ error }}</strong></div>
        </form>
    </div>
</template>

<script>
import upload_product_image from '@/services/api/products/upload_image'
import get_all_product_images  from '@/services/api/products/get_all_images'
import delete_product_image from '@/services/api/products/delete_image'
import config from '@/config.json'

export default {
    props: { product: { required: true, type: Object } },

    data: () => ({ 
        uploadForm: { file: null, accessible: false }, 
        error: null, 
        images: [], 
        config 
    }),

    methods: {
        updateSelectedFile(e) {
            const files = e.target.files;
            this.uploadForm.file = (files.length > 0) ? files[0] : null;
        },
        addImage() {
            this.error = null;

            if (!this.uploadForm.file) return this.error = 'Select a file to upload';

            upload_product_image(this.product._id, this.uploadForm.file, this.uploadForm.accessible).then(this.loadImagesList);
        },
        deleteImage(imageId) {
            delete_product_image(this.product._id, imageId).then(this.loadImagesList);
        },
        loadImagesList() {
            console.log('loading list');
            
            get_all_product_images(this.product._id).then(images => this.images = images);
        }
    },

    mounted() {
        this.loadImagesList();
    }
}
</script>

<style lang="scss">
.product-images-container {
    .product-image {
        position: relative;
        margin-bottom: 1rem;

        img { 
            width: 100%;
            border: 1px solid lightgrey; 
        }

        .accessible-flag {
            position: absolute;
            top: .5rem;
            right: .5rem;
            background: transparentize($color: white, $amount: 0.6);
        }

        .product-image-control {
            .btn {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
    }
}
</style>