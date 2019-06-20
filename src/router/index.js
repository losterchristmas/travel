import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    }
  ]
})
