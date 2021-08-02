<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="isShow = true">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" v-show="isShow">
        <div class="all-sort-list2">
          <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <!-- 1、第一种方式：用router-view + 声明式导航来实现跳转，但是这样组件会特别多，特别耗内存，每个链接都是一个组件，反映在页面上就是当划过这些链接时，会有卡顿现象， -->
              <!-- <router-link :to="{name:'search',query:{category1Id:c1.categoryId,categoryName:c1.categoryName}}">{{c1.categoryName}}</router-link> -->

              <!-- 2、第二种方式，用a标签 + 编程式导航来实现，但是编程式导航还不是最好的解决，每个a标签上都添加一个click事件，那么内存中也会放很多的函数，也是比较占内存 -->
              <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{category1Id:c1.categoryId,categoryName:c1.categoryName}})">{{c1.categoryName}}</a> -->
             
             
              <!-- 3、第三种方式：通过事件委派的方式给a标签的父元素添加点击事件。然后再给每个a标签身上通过data-xxx方式添加我们要传的参数，如下：-->
              <a href="javascript:;" 
              @click="toSearch"
              :data-category1Id="c1.categoryId"
              :data-categoryName="c1.categoryName"
              >{{c1.categoryName}}</a>

            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dt>
                    <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{category2Id:c2.categoryId,categoryName:c2.categoryName}})">{{c2.categoryName}}</a> -->
                    <!-- <router-link :to="{name:'search',query:{category2Id:c2.category2Id,categoryName:c2.categoryName}}">{{c2.categoryName}}</router-link> -->
                    <a href="javascript:;" 
                    @click="toSearch"
                    :data-category2Id="c2.categoryId"
                    :data-categoryName="c2.categoryName"
                    >{{c2.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryId:c3.categoryId,categoryName:c3.categoryName}})">{{c3.categoryName}}</a> -->
                      <!-- <router-link :to="{name:'search',query:{category3Id:c3.categoryId,categoryName:c3.categoryName}}">{{c3.categoryName}}</router-link> -->
                      <a href="javascript:;" 
                      @click="toSearch"
                      :data-category3Id="c3.categoryId"
                      :data-categoryName="c3.categoryName"
                      >{{c3.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name:"TypeNav",
  data(){
    return {
      isShow:true
    }
  },
  mounted(){

    // 调用@/store/home/index.js的的actions向后台请求数据并保存在vuex的state中
    // this.$store.dispatch("getCategoryList");

    if(this.$route.path!="/home"){
      this.isShow = false;
    }
  },
  // 从vuex当中把数据捞到vue组件中使用
  computed:{
    // mapState函数内部可以是对象也可以是数组
    // 是数组必须要满足条件
    // 1、数组直接就是总的state当中的数据，不能是模块里面的
    // 2、数组当中的名字必须和state当中的名字一致
    // ...mapState(["categoryList"])
    // 不能这么干，因为categoryList，不是state.categoryList，而是state.home.categoryList
    ...mapState({
      // 必须使用对象，而且返回的是state.home.categoryList
      categoryList:state=>state.home.categoryList
    })
  },

  methods:{

    // 点击链接跳转到search页面，同时需要携带categoryId和categoryName参数
    toSearch(evt){

      // 这里使用事件代理来处理，获取到点击的对象
      let target = evt.target;

      // 通过点击的对象获取到绑定的dataset
      let targDataSet = target.dataset;

      // 通过结构赋值，将dataset中的值取出来
      let {category1id,category2id,category3id,categoryname} = targDataSet;  

      // 进行逻辑判断，如果有categoryname，那么肯定是我们要的a标签
      if(categoryname){

        // 开始进行this.$router.push(参数)，请求参数的封装，是个对象
        let location = {name:"search"};
      
        // categoryName肯定是有的，先将其封装好
        let query = {categoryName:categoryname}

        // 进行判断，有哪个categoryId就封装哪个
        if(category1id){
          query.category1Id = category1id;
        }else if(category2id){
          query.category2Id = category2id;
        }else{
          query.category3Id = category3id;
        }

        // 最后将封装好的query参数封装到请求的对象参数中，发送请求
        location.query = query;

        if(this.$route.params){
          location.params = this.$route.params;
        }

        this.$router.push(location);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    a{
                      margin-left: 5px;
                      padding-left: 3px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }
          }

          &:hover {
            background-color: #aaa;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>