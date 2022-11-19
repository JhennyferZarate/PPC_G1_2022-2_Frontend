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
            path: '/patient/:id/makeappointment',
            component: () => import('../views/Patient/MakeAppointment.vue')
        }
    ]
})

export default router