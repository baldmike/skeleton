<template>    
    <div class="container-fluid">
        
        
        <example-component v-if="!isAuthenticated" :is="ExampleComponent"></example-component>
        <router-view v-if="isAuthenticated"></router-view>
    </div>
</template>

<script>

    
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "mainApp",
        components: {
            
        },
        props: ["ExampleComponent"],
        computed: mapGetters(['isAuthenticated']),
        
        mounted() {
            if (this.isAuthenticated) {
                this.$router.push('dashboard');
            }
        }
    }

</script>

