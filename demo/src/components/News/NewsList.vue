<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/home/listinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							{{item.name}}
							<p class='mui-ellipsis'>{{item.content}}</p>
                            <p class="ps">时间：{{item.time}}&nbsp; &nbsp; &nbsp;点击{{item.number}}次</p>
						</div>
					</router-link>
				</li>
        </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            list: [],
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            this.$axios({
                methods: 'get',
                url: 'api/index/index/getnewslist'
            }).then(res =>{
                this.list = res.data;
                // console.log(this.list);
            }).catch(err => {
                 Toast("获取失败");
            })
        }
    }
}
</script>
<style scoped>
.ps{
    text-align: right;
    font-size: 14px;
    color:rgb(20, 110, 139);
}
</style>