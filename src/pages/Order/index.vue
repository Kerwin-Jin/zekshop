<template>
    <div class="order-wrap">
        <h1>填写并核对订单信息</h1>
        <div class="block">
            <h3>收件人信息</h3>
            <ul class="addressList">
                <li v-for="address in userAddressList" :key="address.id">
                    <div @click="changeDefaultAddress(address,userAddressList)">
                        <span :class="{default:address.isDefault=='1'}">{{address.consignee}}</span>|
                        <span>{{address.userAddress}}</span>|
                        <span>{{address.phoneNum}}</span>
                        <span v-if="address.isDefault=='1'" style="color:#fff;background-color:#aaa">默认地址</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="block">
            <h3>支付方式</h3>
            <div>
                <span>在线支付</span>|
                <span>货到付款</span>
            </div>
        </div>
        <div class="receiver block">
            <p>寄送至：{{receiveAddress.userAddress}},收件人：{{receiveAddress.consignee}}，电话：{{receiveAddress.phoneNum}}</p>
            <button @click="submitOrder">提交订单</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:"Order",
    mounted(){
        this.getAddress();
    },
    methods:{
        getAddress(){
            this.$store.dispatch("requestAddress");
        },
        changeDefaultAddress(address,addressList){
            addressList.forEach(item=>{
                item.isDefault = "0";
            })
            address.isDefault = "1";
        },

        // 提交订单
        async submitOrder(){
            // 首先发请求创建订单
            // 请求成功会返回订单编号

            // 处理参数
            let tradeInfo = {
                consignee:this.receiveAddress.consignee,
                consigneeTel:this.receiveAddress.phoneNum,
                deliveryAddress:this.receiveAddress.userAddress,
                paymentWay:"ONLINE"
            }

            const result = await this.$API.reqSubmitOrder(tradeInfo);
            if(result.code == 200){
                // 请求成功之后跳转到支付页面
                this.$alert("创建订单成功，正在跳往支付页面...");
                this.$router.push("/pay?orderNum="+result.data.orderNo);
            }else{
                alert("创建订单失败");
            }
        }
    },
    computed:{
        ...mapState({
            userAddressList:state=>state.user.addressList
        }),
        receiveAddress(){
            return this.userAddressList.find(item=>item.isDefault == '1') || {};
        }
    }
}
</script>

<style scoped>
.order-wrap{
    width: 80%;
    margin: 30px auto;
}
.addressList{
    padding-left: 20px;
}
.addressList li{
    cursor: pointer;
    height: 50px;
    line-height: 50px;
}
.addressList li:hover{
    background-color: rgb(236, 236, 236);
}
.addressList li span{
    padding:5px;
    margin: 10px;
}
.addressList li span:nth-child(1){
    padding: 5 10px;
    cursor: pointer;
}
.default{
    border: 1px solid #f40;
}
.receiver{
    margin: 10px;
    padding:5px;
}
.receiver p{
    margin: 10px;
}
.receiver button{
    border: none;
    color: #fff;
    background-color: #f40;
    width: 70px;
    height: 30px;
    cursor: pointer;
}
.block{
    margin: 10px 0;
    padding:10px;
    border: 1px solid #aaa;
}
</style>