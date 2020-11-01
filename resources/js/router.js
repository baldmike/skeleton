import VueRouter from 'vue-router'
import MainApp from './MainApp.vue'
import LoginComponent from './components/LoginComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'

export const router = new VueRouter({ 
    mode: 'history',
    
    routes: [ 
        {
            path: '/', 
            component: MainApp,
            props: {LoginComponent: LoginComponent},
            children: [
                {
                    path: 'dashboard',
                    component: DashboardComponent
                }
            ]
        },
    ],

    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
})