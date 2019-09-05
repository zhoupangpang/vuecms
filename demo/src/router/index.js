import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Search from '@/components/Search'
import Member from '@/components/Member'
import NewsList from '@/components/News/newsList'
import ListInfo from '@/components/News/ListInfo'
import ImgShare from '@/components/Img/ImgShare'
import ImgInfo from '@/components/Img/ImgInfo'
import ShopList from '@/components/Shop/ShopList'
import ShopInfo from '@/components/Shop/ShopInfo'
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
    },
    {
      path: '/home/imgshare',
      component: ImgShare,
    },
    {
      path: '/home/imginfo/:id',
      component: ImgInfo
    },
    {
      path: '/home/shoplist',
      component: ShopList
    },
    {
      path: '/home/shopinfo/:id',
      component: ShopInfo,
      name: 'shopinfo'
    },
  ]
})
