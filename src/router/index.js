import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from './admin'
import guest from './guest'

Vue.use(VueRouter)

const routes = [ admin, guest ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
