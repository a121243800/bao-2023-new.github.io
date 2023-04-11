import Vue from 'vue'
import Router from 'vue-router'
import change from '@/components/change'
import show from '@/components/show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'change',
      component: change
    },
    {
      path: '/show',
      name: 'show',
      component: show
    }
  ]
})
