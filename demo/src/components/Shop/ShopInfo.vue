<template>
    <div class="divt">
        <div class="di"><img :src="list.url"></div>
        <div class="diva">
            <h4>购买商品</h4>
            <hr>
            <div>
                <span>原价：<del>{{list.front_price}}</del></span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>现价：{{list.now_price}}</span>
            </div>
            <!-- <div>{{$store.state.test}}</div> -->
            <Number @getcount="getChildCount"></Number>

            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addCart">加入购物车</mt-button> 
        </div>
        <div class="diva">
           <h4>商品详情</h4>
           <hr>
           <div class="info">
              {{list.content}}
           </div>
        </div>
    </div>
</template>
<script>
import Number from './Number'
export default {
    data() {
        return {
            id: this.$route.params.id,
            list: [],
            count: 0,
        }
    },
    created() {
        this.getInfo();
    },
    methods: {
        getChildCount(count) {
            this.count = count;
            console.log(this.count);
        },
         getInfo() {
              this.$axios({
                methods: 'get',
                url: "api/index/image/getInfo",
                params: {
                    id: this.id,
                }
            }).then(res => {
                this.list = res.data;
            }).catch(err => {
                Toast('获取失败');
            })
        },
        addCart() {
            // 拼接出要加入store的商品信息
            var goodinfo = {
                id: this.id,
                count: this.count,
                price: this.list.now_price,
                selected: true
            };
            // console.log(goodinfo);
            this.$store.commit('addToCart', goodinfo);
        }
    },
    components: {
        Number,
    }
}
</script>
<style scoped>
.diva{
    text-align: left;
    font-size: 18px;
    line-height: 45px;
    margin: 8px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px;
}
.divt{
    margin: 10px;
    margin-bottom: 60px;
}
.info{
    font-size: 18px;
    line-height: 25px;
    text-indent: 2em;
    color:slategray;
}
img{
    height: 300px;
}
.di{
    width: auto;
    background-color: #fff;
    box-shadow: 0 0 10px;
    margin: 10px;
}
</style>