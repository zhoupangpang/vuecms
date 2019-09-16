// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios= axios
// import golbal_ from './components/Global'
// axios.defaults.baseURL = golbal_.BASE_URL
// 使用mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// mint-ui
import { Header,Swipe, SwipeItem,Button,Switch} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
// 使用缩略图
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
Vue.config.productionTip = false

import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
