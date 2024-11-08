import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Origin',
        component: () => import('../views/origin/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;