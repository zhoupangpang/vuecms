<template>
    <div>
        <h3>{{info.name}}</h3>
        <table>
            <tr>
                <td>发布时间： {{info.time}}</td>
                <td>点击次数： {{info.number}}</td>
            </tr>
        </table>
        <hr>
        <p class="content">
            {{info.content}}
        </p>
        <hr>
        <Ping  id = 1 :pos = "$route.params.id"></Ping>
    </div>
</template>
<script>
import Ping from '../Ping/Ping'
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            id: this.$route.params.id,
            info: {},
        }
    },
    created() {
        this.getListInfo();
    },
    methods: {
        getListInfo() {
            this.$axios({
                methods: 'get',
                url: 'api/index/index/getlistinfo',
                params: {
                    id: this.id
                }
            }).then(res => {
                this.info = res.data;
                // console.log(this.info);
            }).catch(err => {
                Toast('获取失败');
            })
        }
    },
    components: {
        Ping,
    }
}
</script>
<style scoped>
h3{
    color: red;
}
table{
    width: 100%;
    color: blue;
    font-size: 14px;
}
td:nth-child(1){
    text-align: left;
}
td:nth-child(2){
    text-align: right;
}
.content{
    text-indent: 2em;
    text-align: left;
    font-size: 17px;
}
</style>