import {createRouter, createWebHistory} from 'vue-router';
import homeView from '@/view/homeView.vue'
import courseView from '@/view/courseView.vue'

const routers = [
    {
        path: '/',
        component: homeView
    },
    {
        path: '/courses',
        component: courseView
    },
    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: '/',
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
