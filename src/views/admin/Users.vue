<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <ul class="list-group">
                    <user-item v-for="user in users" v-bind:key="user._id" :user="user"></user-item>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import get_all_users from '@/services/api/users/get_all'
import UserItem from './users/UserItem'

export default {
    components: { UserItem },
    data: () => ({ users: [] }),

    created() {
        get_all_users().then(users => this.users = users);
    }
}
</script>
