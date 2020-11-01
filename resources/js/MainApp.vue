<template>    
    <div class="container-fluid">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>

    import NavBar from './components/NavBar'
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "mainApp",
        components: {
            NavBar
        },
        props: ["LoginComponent"],
        computed: mapGetters(['isAuthenticated']),
        
        mounted() {
            if (this.isAuthenticated) {
                this.$router.push('dashboard');
            }
        }
    }

</script>

