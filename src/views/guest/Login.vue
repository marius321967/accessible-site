<template>
    <div class="standard-page">
        <div class="login-form">
            <div class="form-group">
                <label for="email" class="label">Email</label>
                <input type="email" id="email" v-model="credentials.email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label for="password" class="label">Password</label>
                <input type="password" id="password" v-model="credentials.password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <button class="btn btn-lg btn-outline-success" :disabled="!isFormFilled" @click="signIn">Sign in</button>
            </div>

            <div class="form-group" v-if="errorMessage">
                <div class="text-danger">
                    {{ errorMessage }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import login from '@/services/auth/login'

export default {
    data: () => ({ credentials: { email: '', password: '' }, errorMessage: null }),
    methods: {
        signIn() {
            this.errorMessage = null;

            if (!this.credentials.email) return this.errorMessage = 'Enter an email';
            if (!this.credentials.password) return this.errorMessage = 'Enter a password';

            login({ ...this.credentials }) 
                .then(token => {
                    this.$store.dispatch('authSetToken', token);
                    this.$router.push('/');
                })
                .catch(e => {
                    this.errorMessage = 'The credentials are incorrect';
                })
        }
    },
    computed: {
        isFormFilled() {
            return this.credentials.email.length > 0 && this.credentials.password.length > 0;
        }
    }
}
</script>

<style lang="scss">
.login-form {
    text-align: center;
    max-width: 20rem;
    margin: 0 auto;
}
</style>