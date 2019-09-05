<template>
    <div class="zd">
        <h4>评论:</h4>
        <textarea  v-model="msg"  rows="8" maxlength="120" placeholder="最多输入120个字"></textarea>
        <mt-button type="primary" size="large" @click="postCom">发表评论</mt-button>
        <div v-if="content.length == false">
            还没有评论。快来抢占沙发吧！
        </div>
        <div v-else>
            <ul>
                <li v-for="(item, index) in content" :key="index">
                
                <div class="titp">
                    <div>第{{index}}楼：</div>
                    <div>用户：{{item.name}} 发表时间：{{item.time}}</div> 
                </div>
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
            msg: ""
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
                // console.log(this.content);
            }).catch(err => {
                Toast('获取失败');
            })
        },
        getMore() {
            this.page ++;
            this.getPing();
        },
        postCom() {
            var _this = this;
            if(this.msg.trim().length === 0) {
               return  Toast('内容不能为空');
            }
            this.$axios({
                method: 'post',
                url: 'api/index/index/postcom',
                data: {
                    'id': 1,
                    'pos': this.pos,
                    'content': this.msg.trim(),
                }
            }).then(res => {
                if(res.data.st === 1) {
                    // 成功之后重新获取页面上的内容
                    this.page = 1;
                    this.content = [];
                    this.getPing();
                    // 把用户输入的内容清空
                    this.msg = "";
                }
                
            }).catch(err => {
                Toast('发表失败');
            })
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
h4,p{
    text-align: left;
}
p{
     text-indent: 2em;
     font-size: 16px;
}
.titp{
    background-color: silver;
    text-align: left;
}

.zd{
    padding-bottom: 55px;
}
</style>