<template>
    <li class="list-group-item d-flex">
        <div class="mr-auto d-inline-block">
            <router-link :to="'/admin/categories/' + category._id">{{ category.name }}</router-link>
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
        category: { required: true, type: Object }
    }
}
</script>
