import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from "vue-router"

import Book from "./components/Book.vue"
import Main from "./components/Main.vue"
import Student from "./components/Student.vue"
import CNNode from './components/CNNode.vue'
// import { component } from 'vue/types/umd'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes=[
  {
  path:'/student',
  component:Student
},
{
  path:'/book',
  component:Book
},
{
path:'/cnnode',
component:CNNode
},
{
  path:'/main',
  component:Main
  },
]

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
