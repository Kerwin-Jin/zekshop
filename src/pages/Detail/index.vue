<template>
  <div class="content">
      <div class="conPoin">
          <span>{{categoryView.cateGory1Name}}</span>/
          <span>{{categoryView.cateGory2Name}}</span>/
          <span>{{categoryView.cateGory3Name}}</span>
      </div>
      <div class="previewWrap">
          
      </div>
      <div class="infoWrap">

      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"Detail",
    data(){
        return {
            skuId:"",
        }
    },
    beforeMount(){
        this.skuId = this.$route.params.goodId;
    },
    mounted(){
        this.getDetailInfo(this.skuId);
    },
    computed:{
        ...mapGetters(['categoryView'])
    },
    methods:{
        getDetailInfo(skuId){
            this.$store.dispatch('getDetailInfo',skuId);
        }
    }
}
</script>

<style scoped>
 .content{
     height: 1500px;
     background-color: antiquewhite;
 }
 .conPoin{
     font-size: 16px;
     color: blueviolet;
     padding: 30px;
 }
</style>