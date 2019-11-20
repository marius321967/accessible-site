<template>
    <div>
        <router-view />
    </div>
</template>

<style lang="scss">
@import 'bootstrap';

body {
    font-weight: 500;
}

.standard-page {
    @extend .container;
    margin-top: 1rem;
}

label.label {
    text-transform: uppercase;
}

.form-group {
    margin-bottom: 2rem;
}

.primary-links .nav-item .nav-link {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>
