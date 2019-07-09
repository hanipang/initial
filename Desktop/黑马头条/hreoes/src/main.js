import Vue from 'vue'
import App from './App.vue'

import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementul)



Vue.config.productionTip = false


// 职责1 依赖项目所需要的资源 js模块， css资源
// 职责2 实例化根实例 render（）渲染app组件 然后挂在到#app容器内
new Vue({
  render: h => h(App),
}).$mount('#app')
