import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upload from '@/components/Upload'
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
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    }
  ]
})
