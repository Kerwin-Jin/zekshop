<template>
  <div>MyCenter</div>
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