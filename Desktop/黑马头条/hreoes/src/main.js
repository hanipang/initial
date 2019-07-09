import Vue from 'vue'
import App from './App.vue'

// 导入element-ul包
import elementui from 'element-ui'
// 导入样式
import 'element-ui/lib/theme-chalk/index.css'
// 默认会加载索引文件 index.js index.vue index.json
import router from './router'

// 在全局范围内注册组件（注册element-ui组件库）
Vue.use(elementui)
Vue.config.productionTip = false


// 职责1 依赖项目所需要的资源 js模块， css资源
// 职责2 实例化根实例 render（）渲染app组件 然后挂在到#app容器内
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
