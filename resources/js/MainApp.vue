<template>    
    <div class="container-fluid">
        <nav-bar></nav-bar>
        <router-view></router-view>
        <notifications group="notifications" position="bottom center" width="100%"/>
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
        
        computed: mapGetters(['isAuthenticated']),
        
        mounted() {
            
        }
    }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
        max-width: 100vw;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
