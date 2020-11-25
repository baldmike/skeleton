import VueRouter from 'vue-router'
import store from './store'
import MainApp from './MainApp.vue'
import LoginComponent from './components/LoginComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'
import Website from './pages/Website.vue'

export const router = new VueRouter({ 
    mode: 'history',
    
    routes: [ 
        {
            path: '/', 
            component: MainApp,
            children: [
                {
                    path: '',
                    component: Website
                },
                {
                    path: 'dashboard',
                    component: DashboardComponent,
                    beforeEnter: (to, from, next) => {
                        if (!store.state.isAuthenticated) {
                            next({
                                path: 'login'
                            });
                            return;
                        }
                        next();
                    }
                },
                {
                    path: 'login',
                    component: LoginComponent
                },
                {
                    path: '*',
                    component: NotFoundComponent
                }
            ]
        },
    ],

    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
})