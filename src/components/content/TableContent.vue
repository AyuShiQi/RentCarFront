<template>
    <div class="table-content">
        <table class="car-table">
            <tr>
                <th v-for="p in header" :key="p">{{p}}</th>
                <th>操作</th>
            </tr>
            <tr v-for="p in info" :key="p.vehicleId">
                <td v-for="(item,j) in p" :key="item+j">{{item}}</td>
                <td>
                    <a href="javascript:;" v-if="$store.state.isAdmin" class="link-option" @click="updateCars(p)">修改</a>
                    <a href="javascript:;" v-if="$store.state.isAdmin" class="link-option" @click="deleteCars(p.vehicleId)">删除</a>
                    <a href="javascript:;" v-if="!$store.state.isAdmin" class="link-option" @click="rentCars(p.vehicleId)">租用</a>
                </td>
            </tr>
        </table>
        <InfoCard :active="active" :changeInfo="changeInfos" :disactive="disactive">
            <div class="change-input-content"><label class="change-title" for="brandChange">品牌</label><input type="text" id="brandChange" class="change-input" v-model="changeBrand"></div>
            <div class="change-input-content"><label class="change-title" for="modelChange">型号</label><input type="text" id="modelChange" class="change-input" v-model="changeModel"></div>
            <div class="change-input-content"><label class="change-title" for="rentChange">日租金</label><input type="text" id="rentChange" class="change-input" v-model.number="changePerRent"></div>
        </InfoCard>
    </div>
</template>

<script>
import InfoCard from './InfoCard.vue'

export default {
    name: 'TableContent',
    components: {InfoCard},
    props: ['header','info','updateCar','deleteCar','rentCar'],
    data() {
        return {
            active: false,
            changeBrand: '',
            changeModel: '',
            changeType: '', 
            changePerRent: 0,
        }
    },
    methods: {
        rentCars(vehicleId) {
            this.rentCar(vehicleId);
        },
        deleteCars(vehicleId) {
            this.deleteCar(vehicleId);
        },
        updateCars(p) {
            console.log(p);
            this.active = true;
            // 把信息填入
            this.changeBrand = p.brand;
            this.changeModel = p.model;
            this.changePerRent = p.perRent; 
            this.changevehicleID = p.vehicleId;
            this.changeType = p.type;
        },
        changeInfos() {
            // 向后端传
            this.updateCar(this.changevehicleID,this.changeType,this.changeBrand,this.changeModel,parseInt(this.changePerRent));
            this.changeBrand = '';
            this.changeModel = '';
            this.changePerRent = 0;
        },
        disactive() {
            this.active = false;
        }
    },
}
</script>

<style>
    .table-content {
        display: flex;
        width: 100%;
        padding-top: 40px;
        justify-content: center;
        align-items: center;
    }

    .table-content .car-table {
        border: 1px solid #ffdfa5;
        border-bottom: 0;
        background-color: #fffef6;
        cursor: pointer;
    }

    .table-content .car-table th {
        background-color: #fff3eb;
    }

    .table-content .car-table td,
    .table-content .car-table th {
        height: 40px;
        padding: 0 40px 0 20px;
        border-bottom: 1px solid #ffdfa5;
        text-align: left;
    }

    .table-content .car-table tr:hover:nth-child(n+1) {
        background-color: #fff8ef;
    }

    .table-content .link-option {
        margin-right: 10px;
    }

    .table-content .link-option:nth-child(odd) {
        color: #f5a2a2;
    }

    .table-content .link-option:nth-child(even) {
        color: #8da3f0;
    }


</style>