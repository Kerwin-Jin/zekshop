<template>
    <div>
        <h1>填写并核对订单信息</h1>
        <div>
            <h3>收件人信息</h3>
            <ul>
                <li v-for="address in userAddressList" :key="address.id">
                    {{address.consignee}}--{{address.userAddress}}--{{address.phoneNum}}
                </li>
            </ul>
        </div>
        <div>
            <h3>支付方式</h3>
            <div>
                <span>在线支付</span>
                <span>货到付款</span>
            </div>
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
        }
    },
    computed:{
        ...mapState({
            userAddressList:state=>state.user.addressList
        })
    }
}
</script>

<style>

</style>