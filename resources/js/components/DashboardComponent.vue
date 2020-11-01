<template>
    <div>
        <h1>The Dashboard Component</h1>
        <button @click.prevent="logout">LOGOUT</button>
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