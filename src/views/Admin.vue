<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-2 col-navigation">
                <navigation></navigation>
            </div>
            <div class="col-lg-10 col-page-content"><router-view></router-view></div>
        </div>
    </div>
</template>

<script>
import Navigation from '@/views/nav/admin/Navigation'

export default {
    components: { Navigation }
}
</script>

<style>
.col-page-content, .col-navigation {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
</style>
