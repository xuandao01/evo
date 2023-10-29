import {createRouter, createWebHistory} from 'vue-router';
import homeView from '@/view/homeView.vue'

const routers = [
    {
        path: '/home',
        component: homeView
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
