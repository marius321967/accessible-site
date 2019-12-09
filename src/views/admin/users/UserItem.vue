<template>
    <li class="list-group-item d-flex">
        <div class="mr-auto d-inline-block"><router-link :to="user._id">{{ user.email }}</router-link></div>
        
        <div class="btn-group d-inline-block">
            <button type="button" class="btn btn-sm btn-secondary">Delete</button>
            <button type="button" class="btn btn-sm btn-secondary">Disable</button>
        </div>
    </li>
</template>

<script>
export default {
    props: { 
        user: { required: true, type: Object }
    }
}
</script>
