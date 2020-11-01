import VueRouter from 'vue-router'
import MainApp from './MainApp.vue'
import ExampleComponent from './components/ExampleComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'

export const router = new VueRouter({ 
    mode: 'history',
    
    routes: [ 
        {
            path: '/', 
            component: MainApp,
            props: {ExampleComponent: ExampleComponent},
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