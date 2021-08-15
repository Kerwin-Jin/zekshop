<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev disabled">
          <a href="#">«上一页</a>
        </li>
        <li class="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">{{totalPageNum}}</a>
        </li>
        <li class="dotted"><span>...</span></li>
        <li class="next">
          <a href="#">下一页»</a>
        </li>
      </ul>
      <div><span>共{{total}}条&nbsp;</span></div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Pagination",
    data(){
        return{

        }
    },
    props:{
        currentPageNum:{
            type:Number,
            default:1
        },
        total:{
            type:Number,
            default:99
        },
        pageSize:{
            type:Number,
            default:10
        },
        continueNum:{
            type:Number,
            required:true
        }
    },
    computed:{

        // 计算总页码
        totalPageNum(){
            return Math.ceil(this.total / this.pageSize);
        },

        // 计算连续页的起始位置和结束位置
        startEnd(){
            let {continueNum,currentPageNum,totalPageNum} = this;
            let start = 0, end = 0;

            if(continueNum >= totalPageNum){
                start = 1;
                end = totalPageNum;
            }else{

                // 正常情况
                start = currentPageNum - Math.floor(continueNum / 2);
                end = currentPageNum + Math.floor(continueNum / 2);

                //非正常情况
                if(start<=0){
                    start = 1;
                    end = continueNum;
                }
                if(end > totalPageNum){
                    end = totalPageNum;
                    start = totalPageNum - continueNum + 1;
                }
            }

            return{start,end};
        }

    }
};
</script>

<style lang="less" scoped>
.page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
  .sui-pagination {
    margin: 18px 0;
    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      width: 490px;
      float: left;
      li {
        line-height: 18px;
        display: inline-block;
        a {
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }
        &.active {
          a {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
        }
        &.prev {
          a {
            background-color: #fafafa;
          }
        }
        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }
        &.dotted {
          span {
            margin-left: -1px;
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }
        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }
    div {
      color: #333;
      font-size: 14px;
      float: right;
      width: 241px;
    }
  }
}
</style>