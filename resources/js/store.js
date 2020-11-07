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
            token: token ? token : null,
        }
    },
    getters: { 
        // getters get data from state and are available in components

        // !! returns boolean  --  if there is a token, the user is authenticated
        isAuthenticated: state => !!state.token,

    },
    mutations: {
        // mutations are committed by actions, and are the ONLY way to manipulate state

        login(state, payload) {
            
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', payload).then(response => {
                    state.token = document.cookie;
                    localStorage.setItem('user-token', state.token);
                    
                });
            }).catch(function (error) {

                self.$notify({
                    group: 'notifications',
                    type: 'error',
                    title: error,
                    text: 'INVALID CREDENTIALS - PLEASE TRY AGAIN.',
                    duration: '15000',
                    width: '100%'
                });

            });
        },

        logout(state) {
            
            state.token = null;
            localStorage.removeItem('user-token');
            axios.post('/logout').then(Response =>{
                router.push('/');
            })
        },
    },
    actions: {
        // actions are dispatched, they commit mutations

        login(context, payload) {
            context.commit('login', payload);
        },

        logout({commit}) {
            commit('logout');
        },
    }

})