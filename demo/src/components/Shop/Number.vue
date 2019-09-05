<template>
    <div class="divz">
        <p class="buy_num">购买数量:</p>
        <button class="btn_minute" @click="btnMinute">-</button>
        <input type="text" value="0" size="1" v-model="count">
        <button class="btn_add" @click="btnAdd">+</button>
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
          this.count++
        }
      },
      /*
      * 购买数量按钮-
      */
      btnMinute (count) {
        if (this.count <= 0) {
          Toast('该宝贝不能减少了哟~')
        } else {
          this.count -= 1
        }
      }
    }
}
</script>
<style scoped>
.divz{
    display: flex;
    height: 40px;
    padding-bottom: 10px;

}
.buy_num{
    flex: 1.5;
    font-size: 18px;
    text-align: left;
    line-height: 40px;
    color:black;
}
.btn_minute,.btn_add {
    flex: 1;
    height: 30px;
}
input{
    background: #f5f5f5;
    flex: 1;
    height: 30px;
}

</style>