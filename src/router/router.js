import {createRouter, createWebHistory} from 'vue-router';
import homeView from '@/view/homeView.vue'
import courseView from '@/view/courseView.vue'
import codeKidView from '@/view/codeKidView.vue'
import courseKidView from '@/view/courseKidView.vue'
import aiQuestView from '@/view/aiQuestView.vue'
import roboticView from '@/view/roboticView.vue'
import newsView from '@/view/newsView.vue'
import eventsView from '@/view/eventsView.vue'
import aboutsView from '@/view/aboutsView.vue'

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
        path: '/course-kid',
        component: courseKidView
    },
    {
        path: '/code-kid',
        component: codeKidView
    },
    {
        path: '/ai',
        component: aiQuestView
    },
    {
        path: '/robotic',
        component: roboticView
    },
    {
        path: '/news',
        component: newsView
    },
    {
        path: '/events',
        component: eventsView
    },
    {
        path: '/abouts',
        component: aboutsView
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
