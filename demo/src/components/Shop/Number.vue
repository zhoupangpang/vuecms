<template>
    <div class="divz">
        <input type="buttom" class="btn_minute" @click="btnMinute" value="-">
        <input type="text"  class="content" value="0"  v-model="count">
        <input type="buttom"  class="btn_add" @click="btnAdd" value="+">
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data () {
      return {
        count: 0,
      }
    },
    methods: {
      /*
      * 购买数量按钮+
      */
      btnAdd (count) {
        if (this.count >= 1000) {
          Toast('该宝贝不能购买更多了~')
        } else {
          this.count++;
        }
      },
      /*
      * 购买数量按钮-
      */
      btnMinute (count) {
        if (this.count <= 0) {
          Toast('该宝贝不能减少了哟~')
        } else {
          this.count -= 1;
          
        }
      }
    },
    watch: {
        count() {
            this.$emit('getcount', this.count); 
        }
    }
}
</script>
<style scoped>
.divz{
    display: flex;
    height: 22px;
    margin-bottom: 10px;
}
.btn_minute,.btn_add {
   width: 25px;
   text-align: center;
    background: #f5f5f5;
}
.content{
    width: 60px;
    height: 20px;
}

</style>