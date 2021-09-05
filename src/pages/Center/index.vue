<template>
  <div style="overflow:hidden;margin-bottom:50px">
    <div class="left-nav">
      <h3>·订单中心</h3>
      <ul>
        <li>
            <router-link to="/center/mycenter" active-class="active">我的订单</router-link>
        </li>
        <li>
            <router-link to="/center/groupcenter" active-class="active">团购订单</router-link>
        </li>
        <li>
            <a href="javascript:;">本地生活订单</a>
        </li>
        <li>
            <a href="javascript:;">我的预售</a>
        </li>
        <li>
            <a href="javascript:;">评价晒单</a>
        </li>
        <li>
            <a href="javascript:;">取消订单记录</a>
        </li>
      </ul>
      <h3>·关注中心</h3>
      <ul>
        <li>关注的商品</li>
        <li>关注的店铺</li>
        <li>关注的专辑</li>
        <li>关注的品牌</li>
        <li>关注的活动</li>
        <li>浏览历史</li>
      </ul>
    </div>
    <div class="right-content">
      <div class="header">
        <h2>我的订单</h2>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Center",
};
</script>

<style scoped>
.active {
  color: #f40;
}
.left-nav{
  float: left;
  width: 300px;
  margin-left: 200px;
}
.left-nav ul{
  margin-left: 20px;
  margin-bottom: 20px;
}
.left-nav ul li{
  height: 30px;
  line-height: 30px;
  width: 80px;
  border-bottom: 1px solid #aaa;
  padding:4px 0;
}
.right-content{
  float: left;
}
.header{
  height: 50px;
  background-color: #f1f1f1;
  line-height: 50px;
  padding-left: 10px;
  width: 1040px;
  border: 1px solid #ccc;
}
</style>