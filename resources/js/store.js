import Vue from 'vue' 
import Vuex from 'vuex'
import { router } from './router'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

    state() {
        let token = localStorage.getItem('user-token');

        console.log("THIS IS THE TOKEN: " + token);

        return {
            
            isAuthenticated: false,
        }
    },
    getters: { 

        // !! returns boolean  --  if there is a token, the user is authenticated
        isAuthenticated: state => state.isAuthenticated,

    },
    mutations: {

        login(state, payload) {
            
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', payload).then(response => {
                    state.token = document.cookie;
                    localStorage.setItem('user-token', state.token);

                    state.isAuthenticated = true;

                    router.push('/dashboard');

                    Vue.notify({
                        group: 'notifications',
                        type: 'success',
                        title: 'Success!',
                        text: 'You are now logged in',
                        duration: '15000',
                        width: '100%'
                    });

                    
                    
                }).catch(function (error) {

                    Vue.notify({
                        group: 'notifications',
                        type: 'error',
                        title: error,
                        text: 'INVALID CREDENTIALS - PLEASE TRY AGAIN.',
                        duration: '20000',
                        width: '100%'
                    });
    
                });
            });
        },

        logout(state) {
            
            axios.post('/logout').then(Response =>{
                document.cookie = "laravel_session=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = "XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                state.isAuthenticated = false;
                state.token = null;
                localStorage.removeItem('user-token');
                
                router.push('/');
            })
        },
    },
    actions: {

        login(context, payload) {
            context.commit('login', payload);
        },

        logout({commit}) {
            commit('logout');
        },
    }

})