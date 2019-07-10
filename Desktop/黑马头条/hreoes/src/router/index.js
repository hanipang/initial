// 导入
import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
// 挂载
Vue.use(VueRouter)

// 配置
const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login }
  ]
})

// 全局
export default router
