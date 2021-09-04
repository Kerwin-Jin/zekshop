<template>
  <div class="success-wrap">
      <h1>恭喜你，支付成功啦！</h1>
      <div>
          <el-button type="danger" @click="toCenter">查看订单</el-button>
          <el-button type="default" @click="continueShop">继续购物</el-button>
      </div>
  </div>
</template>

<script>
export default {
    name:"PaySuccess",
    data(){
        return{

        }
    },
    methods:{
        toCenter(){
            this.$router.push("/center");
        },
        continueShop(){
            this.$router.push("/home");
        }
    }
}
</script>

<style scoped>
.success-wrap{
    width: 800px;
    margin: 50px auto;
    border: 1px solid #aaa;
    text-align: center;
    padding:100px;
}
.success-wrap h1{
    margin-bottom: 50px;
}
</style>