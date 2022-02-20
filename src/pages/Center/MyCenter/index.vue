<template>
  <div class="mycenter-wrap">
    <div class="item" v-for="(item,index) in records" :key="index">
      <p>{{item.name}}</p>
      <p>￥{{item.price}}</p>
    </div>
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
        records:[]
      }
    },
    methods:{
      async getMyCenterOrder(){
        const res = await this.$API.reqMyCenterOrder(this.page,this.data);
        if(res.code == 200){
          this.records = res.data.records;
        }
      }
    }
}
</script>

<style>
.mycenter-wrap{
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}
.mycenter-wrap .item{
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #999;
  background: #eee;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  transition: all .2s  linear;
  align-items: center;
}
.mycenter-wrap .item p{
  font-size: 20px;
}
.mycenter-wrap .item:hover{
  transform: translateY(-5px);
  cursor: pointer;
  box-shadow: 0 0 20px 3px #eee;
}
</style>