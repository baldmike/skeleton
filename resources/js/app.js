import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router'
import store from './store'
import Notifications from 'vue-notification'

require('./bootstrap');

window.Vue = require('vue');

Vue.use(Notifications)

// this will automatically register .vue files
const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    router,
    store,
});
