<template>
    <div class="standard-page">
        <div class="login-form">
            <div class="form-group">
                <label for="email" class="label">Email</label>
                <input type="email" id="email" v-model="form.email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label for="password" class="label">Password</label>
                <input type="password" id="password" v-model="form.password" class="form-control form-control-lg" />
                <small>Min. 4 characters</small>
            </div>

            <div class="form-group">
                <label for="password_repeat" class="label">Repeat password</label>
                <input type="password" id="password_repeat" v-model="form.password_repeat" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <button class="btn btn-lg btn-outline-success" :disabled="!isFormFilled" @click="register">Create account</button>
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
import register from '@/services/auth/register'
import login from '@/services/auth/login'

export default {
    data: () => ({ form: { email: '', password: '', password_repeat: '' }, errorMessage: null }),
    methods: {
        register() {
            this.errorMessage = null;

            if (!this.form.email) return this.errorMessage = 'Enter an email';
            if (!this.form.password) return this.errorMessage = 'Enter a password';
            if (!this.form.password_repeat) return this.errorMessage = 'Repeat the password';
            if (this.form.password != this.form.password_repeat) return this.errorMessage = 'The passwords do not match';

            const credentials = { email: this.form.email, password: this.form.password };

            register(credentials) 
                .then(_ => ( login(credentials) ))
                .then(token => {
                    this.$store.dispatch('authSetToken', token);
                    this.$router.push('/');
                })
                .catch(e => {
                    console.log(e.stack);
                    
                    switch (e.message) {
                        case 'EMAIL_TAKEN': return this.errorMessage = 'The email address is taken';
                        case 'PASSWORD_TOO_SHORT': return this.errorMessage = 'The entered password is too short';
                    }
                    this.errorMessage = e.message;
                })
        }
    },
    computed: {
        isFormFilled() {
            return this.form.email.length > 0 && this.form.password.length > 0
                && this.form.password_repeat.length > 0;
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