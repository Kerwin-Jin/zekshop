<template>
  <div class="success-wrap">
      <h1>恭喜喜，支付成功啦！</h1>
      <div>
          <el-button type="danger">查看订单</el-button>
          <el-button type="default">继续购物</el-button>
      </div>
  </div>
</template>

<script>
export default {
    name:"PaySuccess"
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