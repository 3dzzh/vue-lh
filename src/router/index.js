import Vue from'vue'
import VueRouter from 'vue-router'
import LoginIn from'../components/LoginIn.vue'
import Register from'../components/Register.vue'
import Index from'../components/Index'
Vue.use(VueRouter)
const routes = [
    {path:'/',component:LoginIn},
    {path:'/register',component:Register},
    {path:'/index',component:Index}
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router