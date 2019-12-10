<template>
    <div>
        <p>
            <router-link to="/admin/categories/new" class="btn btn-sm btn-success">Create category</router-link>
        </p>

        <div class="row">
            <div class="col-md-4">
                <ul class="list-group">
                    <category-item v-for="category in categories" v-bind:key="category._id" :category="category"></category-item>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import get_all_categories from '@/services/api/categories/get_all'
import CategoryItem from './categories/CategoryItem'

export default {
    components: { CategoryItem },
    data: () => ({ categories: [] }),
    
    created() {
        get_all_categories().then(categories => this.categories = categories);
    }
}
</script>
