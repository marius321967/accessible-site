<template>
    <div>
        <p>
            <router-link to="./">Go back</router-link>
        </p>
        
        <h4>Edit category</h4>

        <div class="row" v-if="category">
            <div class="col-md-4">
                <form v-if="category">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control form-control-sm" v-model="category.name" />
                    </div>

                    <div class="form-group">
                        <button class="btn btn-sm btn-primary" type="button" @click="save">Save</button>
                    </div>

                    <div class="form-group text-danger" v-if="error">
                        <strong>{{ error }}</strong>
                    </div>
                </form>
             </div>

        </div>
    </div>
</template>

<script>
import get_category_by_id from '@/services/api/categories/get_by_id'
import update_category from '@/services/api/categories/update'

export default {
    props: { id: { required: true, type: String } },

    data: () => ({
        category: null,
        error: null,
    }),

    methods: {
        save() {
            update_category(this.id, this.category);
        },
    },

    mounted() {
        get_category_by_id(this.id).then(category => {
            delete category._id;
            this.category = category;
        });
    }
}
</script>
