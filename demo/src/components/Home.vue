<template>
    <div>
        <mt-swipe :auto="1000">
            <mt-swipe-item v-for="item in listImg" :key="item.id">
                <!-- <p>{{item.name}}</p> -->
                <img :src="item.name" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-help"></span>
		                    <div class="mui-media-body">新闻咨询</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chat"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-videocam"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            listImg: []
        }
    },
    created() {
        this.getImage();
    },
    methods: {
        getImage() {
             this.$axios({
                 methods: 'get',
                 url: 'api/index/index/index',
            }).then(res => {
                // console.log(res.data);
                //  Toast('加载轮播图成功');
                this.listImg = res.data;
            }).catch(err => {
                Toast('加载轮播图失败');
            })
        }
    }
}
</script>
<style scoped>
.mint-swipe{
    height: 300px;
    /* background: red;  */
}
img{
    height: 300px;
    width: 90%;
}
li{
    background-color: #fff;
}
</style>