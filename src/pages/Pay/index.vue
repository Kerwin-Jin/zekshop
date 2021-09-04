<template>
  <div class="pay_wrap">
    <h3 style="margin: 10px 0">
      订单提交成功，请您及时付款，以便尽快为您发货~~
    </h3>
    <p>
      请您再提交订单<span style="color: #ea4a36">4小时</span
      >内完成支付，超时订单会自动取消，订单号{{ orderNum }}
    </p>
    <p style="color: #ea4a36; font-size: 20px">应付金额：￥{{ payInfo.money }}</p>
    <el-button type="danger" @click="pay">立即支付</el-button>
    <div class="explanation">
      <h2>重要说明</h2>
      <ul>
        <li>1.商品汇商城支付平台目前只支持微信和支付宝支付方式。</li>
        <li>2.其他支付渠道正在调试中，敬请期待。</li>
        <li>3.为了保证您的购物支付顺利完成，请保存以下支付宝信息</li>
      </ul>
      <h2>支付宝账号信息：（很重要，请保存！！！）</h2>
      <ul>
        <li>支付密码账号：14528</li>
        <li>支付密码：*****</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
  beforeMount() {
    this.orderNum = this.$route.query.orderNum;
  },
  mounted() {
    this.getPayInfo();
  },
  data() {
    return {
      orderNum: "",
      payInfo: {},
      payStatus:0,
    };
  },
  methods: {
    // 获取支付信息
    async getPayInfo() {
      const result = await this.$API.reqPayInfo();
      if (result.code == 200) {
        this.payInfo = result.data;
      } else {
        alert("获取付款信息失败！");
      }
    },

    // 点击立即支付的回调
    pay() {
        // 如果有支付信息才进行如下操作，否则直接弹出告警信息
        if(this.payInfo){
          // 弹出支付二维码
          this.$alert(`<img src=${this.payInfo.codeUrl} style="width:150px;">`, "请使用微信扫码支付", {
              dangerouslyUseHTMLString: true,
              showClose:false,
              center:true,
              showConfirmButton:true,
              showCancelButton:true,
              confirmButtonText:"我已完成支付",
              cancelButtonText:"支付遇到问题",
              // beforeClose一旦设定，那么消息盒子关闭不关闭，我们可以在这个里面进行控制
              beforeClose:(action,instance,done)=>{
                // action代表用户点击的是哪个按钮，'confirm'确定按钮，'cancel'取消或'close'关闭
                if(action === "confirm"){
                  // 用户点击的是确定
                  if(!this.payStatus){
                    // 如果没有成功支付，就走这里
                    // 1.提示
                    this.$message.error("未查询到支付成功，请确认您已经完成支付！");

                  }
                }else if(action === "cancel"){
                  // 1.提示
                  this.$message.warning("支付遇到问题请联系客户：400-1813562");
                  // 2.清除定时器
                  clearInterval(this.timer);
                  this.timer = null;
                  // 3.关闭消息盒子
                  done();
                }
              }
          }).then(()=>{}).catch(()=>{})//.then处理确定，.catch处理取消，这两个会关闭掉messageBox，这里我们不用，
          // 而是用beforeClose这个回调函数，这里写出来是为了不让报一个错误

          // 轮询，隔两秒发一个请求，为了让后台给我返回这个订单的支付状态
          if(!this.timer){
            this.timer = setInterval(async ()=>{
              let result = await this.$API.reqPaySatus(this.orderNum);
              if(result.code==200){
                // 1、把成功的标志保存下来用于用户点击按钮的时候进行判断
                this.payStatus = 200;

                // 2、提示支付成功
                this.$message.success("支付成功");

                // 3、关闭定时器
                clearInterval(this.timer);  //clearInterval只是清除了定时器，不让管理模块当中的定时器生效
                this.timer = null;          //把之前设置定时器的编号id也清除

                // 4.自动跳转到支付成功页面
                this.$msgbox.close();       //关闭掉弹出框
                this.$router.push("/paysuccess");    

              }
            },2000);
          }

        }else{
          this.$alert("未获取到支付信息");
        }
    },
  },
};
</script>

<style scoped>
.pay_wrap {
  margin: 20px auto;
  width: 90%;
}
.pay_wrap p {
  height: 30px;
  line-height: 30px;
}
.explanation {
  margin-top: 10px;
  border: 2px solid #ea4a36;
  padding: 10px;
}
.explanation li {
  line-height: 20px;
  height: 20px;
  padding: 5px 0;
}
.explanation h2 {
  color: #ea4a36;
}
</style>