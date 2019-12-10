<template>
    <div>
        <h5>Add new category</h5>

        <form>
            <div class="row">
                <div class="col-md-3">
                    
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control form-control-sm" v-model="form.name" />
                    </div>
                    
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-sm btn-primary" type="button" @click="create">Create</button>
            </div>

            <div class="form-group text-danger" v-if="error">
                <strong>{{ error }}</strong>
            </div>

        </form>
    </div>
</template>

<script>
import create_category from '@/services/api/categories/create'

export default {
    data : () => ({
        form: { name: '' },
        error: null,
    }),
    methods: {
        create() {
            this.error = null;

            if (!this.form.name) return this.error = 'You must provide a name of the category';

            create_category(this.form).then(id => this.$router.push(id));
        }
    }
}
</script>
