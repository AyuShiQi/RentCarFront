<template>
    <div class="user-home">
        <ChooseBox>
            <QueryBox ref="queryBox" :changeHeaderInfo="getHeaderInfo" :changeInfos="getInfos"/>
        </ChooseBox>
        <TableContent  :header="headerInfo" :info="infos" :rentCar="openCard" :deleteCar="null" :updateCar="null"/>
        <RentCard :active="active" :changeInfo="rentCar" :disactive="disactive">
            <div class="change-input-content"><label class="change-title" for="carRent">请输入租借天数</label></div>
            <div class="change-input-content"><input type="text" id="carRent" class="change-input" v-model.number="days" @blur="check"></div>
        </RentCard>
    </div>
</template>

<script>
import ChooseBox from './ChooseBox'
import QueryBox from './QueryBox'
import TableContent from './TableContent'
import RentCard from './RentCard'
import { rentCar } from '../../network'

export default {
    name: 'UserHome',
    components: {ChooseBox,QueryBox,TableContent,RentCard},
    data() {
        return {
            headerInfo: ['车牌号','类型','品牌','型号','日租金'],
            infos: [],
            active: false,
            vehicleId: '',
            days: 0,
        }
    },
    methods: {
        getHeaderInfo(info) {
            this.headerInfo = info;
        },
        getInfos(info) {
            this.infos = info;
        },
        disactive() {
            this.active = false;
        },
        openCard(vehicleId) {
            this.active = true;
            this.vehicleId = vehicleId;
        },
        rentCar() {
            if(this.days<=0) {
                alert('租用天数非法！请重新输入！')
                return;
            }
            if(this.days>730) {
                alert('租车天数不可超过2年，请重新输入！');
                return;
            }
            rentCar(this.$store.state.userName,this.vehicleId,this.days).then(data=>{
                alert('你需要支付的费用为:'+data.rent+',已加入订单，待支付');
                this.active = false;
            }).catch(err=>{
                console.log(err);
                alert('租借失败');
            });
        },
        check() {
            if(!this.days instanceof Number) {
                this.days = 0;
            }
            else if(this.days<0) {
                this.days = 0;
            }
        }
    },
    mounted() {
        // 向后端请求所有汽车数据
        // 暂定
    }
}
</script>

<style>
    @import '../../assets/css/btn.css';
    .admin-home {
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        height: 100%;
    }

    .choose-btn {
        width: 60px;
        height: 40px;
        margin: 0 10px;
    }
</style>