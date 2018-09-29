import Vue from'vue'
import VueRouter from 'vue-router'
import LoginIn from'../components/LoginIn.vue'
import Register from'../components/Register.vue'
import Index from'../components/Index'
import Person from'../components/Person.vue'
import News from'../components/News.vue'
import Agent from'../components/Agent'
import BriefIntroduce from'../components/BriefIntroduce'
import Bussiness from'../components/Bussiness'
import Order from'../components/Order'
Vue.use(VueRouter)
const routes = [
    {path:'/',component:LoginIn},
    {path:'/register',component:Register},
    {path:'/index',component:Index},
    {path:'/person',component:Person},
    {path:'/news',component:News},
    {path:'/agent',component:Agent},
    {path:'/briefintroduce',component:BriefIntroduce},
    {path:'/bussiness',component:Bussiness},
    {path:'/order',component:Order}
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router