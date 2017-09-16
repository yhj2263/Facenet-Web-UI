import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Train from '@/components/Train'
import Classify from '@/components/Classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Hello
    },
    {
      path: '/train',
      name: 'train',
      component: Train
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    }
  ]
})
