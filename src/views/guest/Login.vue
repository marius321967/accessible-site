<template>
    <div class="standard-page">
        <div class="login-form">
            <h5>Sign in to your account</h5>

            <div class="form-group">
                <label for="email" class="label">Email</label>
                <input type="email" id="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label for="password" class="label">Password</label>
                <input type="password" id="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <button class="btn btn-lg btn-success">Sign in</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.login-form {
    text-align: center;
    max-width: 20rem;
    margin: 0 auto;
}
</style>