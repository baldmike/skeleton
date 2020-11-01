import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router'
import store from './store'

require('./bootstrap');

window.Vue = require('vue');

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/LoginComponent.vue').default);

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    router,
    store,
});
