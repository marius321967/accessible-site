<template>
    <div>
        <h5>Statistics</h5>
        
        <ul class="list-group">
            <li class="list-group-item">Users: {{ users.length }}</li>
            <li class="list-group-item">Products: 0</li>
        </ul>
    </div>
</template>

<script>
import get_all_users from '@/services/api/users/get_all'

export default {
    data: () => ({ users: [] }),

    created() {
        get_all_users().then(users => this.users = users);
    }
}
</script>

<style>

</style>