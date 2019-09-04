import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Search from '@/components/Search'
import Member from '@/components/Member'
import NewsList from '@/components/News/newsList'
import ListInfo from '@/components/News/ListInfo'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home,
      // children: [{
      //   path: 'newslist',
      //   component: NewsList,
      // }]
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/search',
      component: Search
    },
    {
        path: '/home/newslist',
        component: NewsList,
    },
    {
      path: '/home/listinfo/:id',
      component: ListInfo,
    }
  ]
})
