<template>
    <div class="container">
        <!-- login form -->
        <div class="row mt-4">
            <div class="col-6 offset-3">
                <form action="#" @submit.prevent="handleLogin">
                    <h3>Login</h3>
                    <div class="form-row">
                        <input type="email" name="email" class="form-control" v-model="formData.email" placeholder="Email Address">
                    </div>
                    <div class="form-row">
                        <input type="password" name="password" class="form-control" v-model="formData.password" placeholder="Password">
                    </div>
                    <div class="form-row">
                        <button type="submit" class="btn btn-primary">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapGetters } from "vuex";

    export default {
        data() {
            return {
                
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            handleLogin() {
                this.$store.dispatch('login', this.formData);
            },

            logout() {
                this.$store.dispatch('logout');
            },
        },

        computed: {
            ...mapGetters(['isAuthenticated']),
        },
    }
</script>

<style>
    .form-row {
        margin-bottom: 8px;
    }
</style>