<template>
    <div>
       <div class="mui-card">
        <div class="mui-card-content" v-for="(item,id) in list" :key="id">
            <mt-switch v-model="item.isselected"></mt-switch>
            <img :src="item.url">
            <div class="diva">
                <h1>{{item.name}}</h1>
                <p class="pa">
                    <span class="info">${{item.now_price}}</span>
                    <input type="buttom" class="btn_minute" @click="btnMinute(id)" value="-">
                    <input type="text"  class="content" value="0"  v-model="item.count">
                    <input type="buttom"  class="btn_add" @click="btnAdd(id)" value="+">
                    <a>删除</a>
                </p>
            </div>
        </div>
       
    </div>
    <!-- {{$store.state.cart}} -->
    <div class="mui-card">
        <div class="mui-card-content">
            <p>总计：</p>
        </div>
    </div>
    </div>
</template>
<script>
import Number from './Shop/Number'
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            list: [],
        }
    },
    components: {
        Number,
    },
    created() {
        this.getinfo()
    },
    methods: {
        getinfo() {
            this.$axios({
                method: 'get',
                url: 'api/index/bug_goods/getgwc'
            }).then(res => {
                console.log(res.data);
                this.list = res.data;
            }).catch(err => {
                Toast('获取购物车失败');
            })
        },
         /*
      * 购买数量按钮+
      */
      btnAdd (id) {
        if (this.list[id].count >= 1000) {
          Toast('该宝贝不能购买更多了~')
        } else {
          this.list[id].count++;
        //   store中count++
        }
      },
      /*
      * 购买数量按钮-
      */
      btnMinute (id) {
        if (this.list[id].count <= 0) {
          Toast('该宝贝不能减少了哟~')
        } else {
          this.list[id].count -= 1;
        }
      }
    }
}
</script>
<style scoped>
*{
    margin: 2px;
    padding: 0;
}
img{
    width: 80px;
    height:80px;
}
h1{
    font-size: 14px;
    margin: 5px;
}
.info{
    color: red;
    font-weight: bold;
}
.mui-card-content{
    display: flex;
    justify-content: space-around;
}
.pa{
    display: flex;
    margin-top: 25px;
}
.btn_minute,.btn_add {
   width: 25px;
   text-align: center;
    background: #f5f5f5;
    height: 22px;
}
.content{
    width: 40px;
    height: 20px;
}
</style>