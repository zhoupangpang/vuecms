<template>
    <div>
        <ul>
            <router-link  v-for="(item, id) in list" :key="id"
                :to="'/home/imginfo/' + item.id"  tag="li">
                <img :src="item.name">
                <p>{{item.info}}</p>
           </router-link>
        </ul>
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
        this.getImgList(0);
    },
    methods: {
        getImgList(num) {
            // console.log(num);
            this.$axios({
                method: 'get',
                url: 'api/index/Image/getAllimg',
                params: {
                    pos: num,
                }
            }).then(res => {
                this.list = res.data;
            }).catch(err => {
                Toast('加载失败');
            })
        }
    }
}
</script>
<style scoped>

ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
img{
    width: 100%;
    height: 300px;
}
li{
    position: relative;
}
p{
    z-index: 1;
    position: absolute;
    bottom: 0;
    color:#fff;
    text-align: left;
    text-indent: 2em;
}
div{
    padding-bottom:60px;
}
</style>