import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/patient/:id',
            component: () => import('../views/Patient/Home.vue')
        },
        {
            path: '/patient/chat',
            component: () => import('../views/Patient/Chat.vue')
        },
        {
            path: '/medical',
            component: () => import('../views/Medical/Home.vue')
        }
    ]
})

export default router