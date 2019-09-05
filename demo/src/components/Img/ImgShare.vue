<template>
    <div>
     <div class="div1">
         <div class="div2" @click="changes(0)"  :class="{color: 0==this.posnum}">全部</div>
         <div class="div2" @click="changes(1)" :class="{color: 1==this.posnum}">北京</div>
         <div class="div2" @click="changes(2)" :class="{color: 2==this.posnum}">明星</div>  
         <div class="div2" @click="changes(3)" :class="{color: 3==this.posnum}">娱乐</div>
         <div class="div2" @click="changes(4)" :class="{color: 4==this.posnum}">美食</div>
     </div>
     <ImgList  ref="mychild"></ImgList>
    </div>
</template>
<script>
import ImgList from './ImgList'
export default{
    data() {
        return {
            posnum: 0,
        }
    },
    methods: {
        changes(num) {
            this.posnum = num;
            this.$refs.mychild.getImgList(num);
        }
    },
    components: {
        ImgList,
    }
}
</script>
<style scoped>
.div1{
    display: flex;
}
.div2{
    flex: 1;
}
.color{
    color: red;
}
</style>