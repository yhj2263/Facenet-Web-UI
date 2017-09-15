import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upload from '@/components/Upload'
import TestUI from '@/components/TestUI'

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
      path: '/TestUI',
      name: 'TestUI',
      component: TestUI
    }
  ]
})
