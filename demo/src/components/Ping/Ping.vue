<template>
    <div class="zd">
        <h4>评论:</h4>
        <textarea rows="8" maxlength="120" placeholder="最多输入120个字"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div v-if="content.length == false">
            还没有评论。快来抢占沙发吧！
        </div>
        <div v-else>
            <ul>
                <li v-for="item in content" :key="item.id">
                
                <h5>第{{item.id}}楼： 用户：{{item.name}}  发表时间：{{item.time}}</h5>
                <p>{{item.content}}</P>
                <hr>
                </li>
            </ul>
            <mt-button type="danger" size="large" plain @click="getMore">加载更多...</mt-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            content: [],
            page: 1,
        }
    },
    created(){
        this.getPing();
    },
    methods: {
        getPing() {
            this.$axios({
                methods: 'get',
                url: "api/index/index/getping",
                params: {
                    id: this.id,
                    pos: this.pos,
                    page: this.page
                }
            }).then(res => {
                if(res == [] && this.content == []) {
                    this.content = [];
                }else {
                    this.content = this.content.concat(res.data);
                }
                console.log(this.content);
            }).catch(err => {
                Toast('获取失败');
            })
        },
        getMore() {
            this.page ++;
            this.getPing();
        }
    },
    props: [
        'id',
        'pos'
    ]
}
</script>
<style scoped>
ul{
    list-style: none;
    padding: 0;
}
h4,h5,p{
    text-align: left;
}
p{
     text-indent: 2em;
     font-size: 16px;
}
h5{
    background-color: silver;
    height: 30px;
    line-height: 30px;
}
.zd{
    padding-bottom: 50px;
}
</style>