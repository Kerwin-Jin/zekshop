<template>
  <div>
    <table>
      <thead>
        <tr>
          <th width="20%">商品</th>
          <th width="30%">订单详情</th>
          <th width="20%">收货人</th>
          <th width="20%">金额</th>
          <th width="20%">状态</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
    name:"MyCenter",
    mounted(){
      this.getMyCenterOrder();
    },
    data(){
      return{
        page:1,
        data:5,
        records:{}
      }
    },
    methods:{
      async getMyCenterOrder(){
        const res = await this.$API.reqMyCenterOrder(this.page,this.data);
        if(res.code == 200){
          this.records = res.data;
        }
      }
    }
}
</script>

<style>

</style>