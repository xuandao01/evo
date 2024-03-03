import {createRouter, createWebHistory} from 'vue-router';
// import homeView from '@/view/homeView.vue'
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
        component: () => import(/* webpackChunkName: "group-user" */ '@/view/homeViewV3.vue')
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
        path: '/privacy-policy',
        component: () => import(/* webpackChunkName: "group-user" */ '@/view/privacyPolicyView.vue')
    },
    {
        path: '/policies-regulations',
        component: () => import(/* webpackChunkName: "group-user" */ '@/view/policiesRegulations.vue')
    },
    {
        path: '/terms-of-use',
        component: () => import(/* webpackChunkName: "group-user" */ '@/view/termsOfUse.vue')
    },
    {
        path: '/adult-course',
        component: () => import(/* webpackChunkName: "group-user" */ '@/view/courseAdultView.vue')
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
