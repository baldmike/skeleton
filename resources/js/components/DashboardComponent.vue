<template>
    <div>
        <h1>The Dashboard Component</h1>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
 
            }
        },
        methods: {
            logout(){
                this.$store.dispatch('logout');
            }
        },
        computed: {
        },
        }
</script>

<style>
</style>