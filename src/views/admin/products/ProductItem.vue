<template>
    <li class="list-group-item d-flex">
        <div class="mr-auto d-inline-block">
            <router-link :to="'/admin/products/' + product._id">{{ product.name }}</router-link>
            - 
            {{ product.price }}€
        </div>
        
        <div class="btn-group d-inline-block">
            <button type="button" class="btn btn-sm btn-secondary">Delete</button>
            <button type="button" class="btn btn-sm btn-secondary">Hide</button>
        </div>
    </li>
</template>

<script>
export default {
    props: { 
        product: { required: true, type: Object }
    }
}
</script>
