<template>
    <div class="profile-view">
        <div class="profile-view_info-part">
            <h2>用户名：{{$store.state.userName}}</h2>
            <h2>权限：{{$store.state.permission}}</h2>
        </div>
        <div v-if="!$store.state.isAdmin" class="profile-view_order-part">
            <h2>当前订单</h2>
                <table class="order-table">
                <tr>
                    <th v-for="p in header" :key="p">{{p}}</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(p,index) in infos" :key="index">
                    <td v-for="(item,j) in p" :key="item+j">{{item}}</td>
                    <td>
                        <a href="javascript:;" class="link-option" @click="pay(p.vehicleId,p.rents)">支付</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-if="$store.state.isAdmin" class="profile-view_sum-part">
            <h2>总订单数：{{allCount}}单</h2>
            <h2>待支付订单数：{{noPayCount}}单</h2>
            <h2>已完成订单数：{{payedCount}}单</h2>
            <h2>总成交额：{{allRent}}元</h2>
        </div>
    </div>
</template>

<script>
import { getOrder,payCar,getOrderInfos } from '../network'
export default {
    name: 'ProfleView',
    data() {
        return {
            header: ['车牌号','待支付金额'],
            infos: [['asidjwn',300]],
            allCount: 0,
            noPayCount: 0,
            payedCount: 0,
            allRent: 0
        }
    },
    methods: {
        pay(vehicleId,rents) {
            payCar(this.$store.state.userName,vehicleId,rents).then(val=>{
                alert('支付成功');
                // 再次请求订单
                this.getOrder();
            }).catch(err=>{
                console.log(err);
            })
        },
        getOrder() {
            getOrder(this.$store.state.userName).then(data=>{
                this.infos = data.infos;
            }).catch(err=>{
                console.log(err);
            });
        },
        getOrderInfos() {
            getOrderInfos()
            .then(data=>{
                this.allCount = data.allCount;
                this.noPayCount = data.noPayCount;
                this.payedCount = data.payedCount;
                this.allRent = data.allRent;
            }).catch(err=>{
                console.log(err);
            })
            
        }
    },
    mounted() {
        // 请求订单infos
        if(!this.$store.state.isAdmin) this.getOrder();
        else this.getOrderInfos();
    }
}
</script>

<style>
    .profile-view {
        padding: 20px;
    }
    
    .profile-view h2 {
        font-size: 24px;
        color: #2d3768;
    }

    .profile-view_order-part,
    .profile-view_sum-part
     {
        margin-top: 30px;
    }

    .profile-view_order-part .order-table {
        margin-top: 10px;
        border: 1px solid #ffdfa5;
        border-bottom: 0;
        background-color: #fffef6;
        cursor: pointer;
    }

    .profile-view_order-part .order-table th {
        background-color: #fff3eb;
    }

    .profile-view_order-part .order-table td,
    .profile-view_order-part .order-table th {
        height: 40px;
        padding: 0 40px 0 20px;
        border-bottom: 1px solid #ffdfa5;
        text-align: left;
    }

    .profile-view_order-part .order-table tr:hover:nth-child(n+1) {
        background-color: #fff8ef;
    }

    .profile-view_order-part .order-table td {
        color: #2e2e52;
    }

    .profile-view_order-part .order-table .link-option {
        color: #5cbcd2;
    }
</style>