<template>
    <div class="div1">
        <!-- <router-link class="shopitem" v-for="(item, id) in list"
             :key="id" :to="'/home/shopinfo/' + item.id"> -->
        <div class="shopitem" v-for="(item, id) in list" :key="id"
            @click="getInfo(item.id)">
            <img :src="item.url">
            <h4>{{item.name}}</h4>
            <div>
                <p>
                    <span class="span1">原价：{{item.front_price}}</span> 
                    <span>现价：{{item.now_price}}</span>
                </p>
                <p>
                    <span>疯抢中</span> 
                    <span>剩余{{item.num}}件</span>
                </p>
            </div>
        <!-- </router-link> -->
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getshop();
    },
    methods: {
        getshop() {
              this.$axios({
                methods: 'get',
                url: "api/index/image/getshop"
            }).then(res => {
                this.list = res.data;
            }).catch(err => {
                Toast('获取失败');
            })
        },
        getInfo(id) {
            // this.$router.push("/home/shopinfo/" + id);
            // this.$router.push({path: "/home/shopinfo/" + id});
            this.$router.push({
                name: 'shopinfo', //name值不是路由名称，是定义路由时的name
                params: {'id': id}
            })
        }
    }
}
</script>
<style scoped>
.div1{
    margin-bottom: 50px;
    display: flex;
    /* 	元素在必要的时候拆行或拆列。 */
    flex-wrap: wrap;
    /* 各个元素之间留空白 */
    justify-content: space-between;
    padding: 5px;

}
.shopitem{
    /* 宽度设置为49%，让两个商品在一行 */
    width: 49%;
    /* 加边框和阴影 */
    border: 1px solid #fff;
    box-shadow: 0 0 10px;
    margin-bottom: 5px;
}
img{
    width: 100%;
}
.span1{
    text-decoration: line-through;
}
</style>