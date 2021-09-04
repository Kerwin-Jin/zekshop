<template>
  <div>
    <div>
      <h3>.订单中心</h3>
      <ul>
        <li>
            <router-link to="/center/mycenter" active-class="active">我的订单</router-link>
        </li>
        <li>
            <router-link to="/center/groupcenter">团购订单</router-link>
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
    </div>

    
    
    <router-view></router-view>
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
</style>