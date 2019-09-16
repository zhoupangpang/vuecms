import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var cart = JSON.parse(localStorage.getItem('cart') || "[]")
export default new Vuex.Store({
    state: {
        cart: cart
        // {id:商品id,count:购买数量,price:价格,selected:true}
    },
    mutations: {
        addToCart(state, goodsinfo) {
            // 之前加入过就更改数量
            var flag = 0;
            state.cart.some(item => {
                if(item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = 1;
                    return true;
                }
            })
            if(flag === 0) {
                state.cart.push(goodsinfo);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
            // console.log(state.cart);
        }
    },
    getters: {
        getTotle(state) {
            var totle = 0;
            state.cart.forEach(ele => {
                totle += ele.count;
            });
            return totle;
        }
    }
})