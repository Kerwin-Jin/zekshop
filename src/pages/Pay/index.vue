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
        <li>1.商品汇商城支付平台目前只支持支付宝支付方式。</li>
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
      this.$alert(`<img src=${this.payInfo.codeUrl} style="width:150px;">`, "请使用微信扫码支付", {
        dangerouslyUseHTMLString: true,
        showClose:false,
        center:true,
        showConfirmButton:true,
        showCancelButton:true,
        confirmButtonText:"我已完成支付",
        cancelButtonText:"支付遇到问题"
      });
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