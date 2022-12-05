<template>
    <div class="admin-home">
        <ChooseBox>
            <button class="choose-btn red-border-btn" @click="openCard">添加</button>
            <QueryBox ref="queryBox" :changeHeaderInfo="getHeaderInfo" :changeInfos="getInfos"/>
        </ChooseBox>
        <TableContent  :header="headerInfo" :info="infos" :deleteCar="myDeleteCar" :updateCar="myUpdateCar" :rentCar="null"/>
        <InfoCard :active="active" :changeInfo="addCar" :disactive="disactive">
            <div class="change-input-content"><label class="change-title" for="idAdd">车牌号</label><input type="text" id="idAdd" class="change-input" v-model="addVehicleId"></div>
            <div class="change-input-content"><label class="change-title" for="typeAdd">类型</label>
                <select type="text" id="typeAdd" class="change-input" v-model="addType">
                    <option v-for="item in types" :key="item" :value="item">{{item}}</option>
                </select>
            </div>
            <div class="change-input-content"><label class="change-title" for="brandAdd">品牌</label><input type="text" id="brandAdd" class="change-input" v-model="addBrand"></div>
            <div class="change-input-content"><label class="change-title" for="modelAdd">型号</label><input type="text" id="modelAdd" class="change-input" v-model="addModel"></div>
            <div class="change-input-content"><label class="change-title" for="rentAdd">日租金</label><input type="text" id="rentAdd" class="change-input" v-model.number="addPerRent"></div>
        </InfoCard>
    </div>
</template>

<script>
import ChooseBox from './ChooseBox'
import QueryBox from './QueryBox'
import TableContent from './TableContent'
import InfoCard from './InfoCard'
import {addCar,deleteCar,updateCar} from '../../network'

export default {
    name: 'AdminHome',
    components: {ChooseBox,QueryBox,TableContent,InfoCard},
    data() {
        return {
            headerInfo: ['车牌号','类型','品牌','型号','日租金'],
            types: ['轿车','货车','客车'],
            infos: [],
            active: false,
            addVehicleId: '',
            addType: '',
            addBrand: '',
            addModel: '',
            addPerRent: 999,
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
        openCard() {
            this.active = true;
        },
        // 添加汽车函数
        addCar() {
            console.log(this.addType);

            // 向后端传
            addCar(this.addVehicleId, this.addType, this.addBrand,this.addModel, this.addPerRent)
            .then(data=>{
                alert('添加成功');

                this.$refs.queryBox.defaultQuery();
                this.active = false;
            }).catch(err=>{
                console.log(err);
                alert('添加失败,该车牌号或已存在！');
            });
            this.addVehicleId =  '';
            this.addType =  '';
            this.addBrand = '';
            this.addModel = '';
            this.addPerRent = 999;
        },
        myDeleteCar(vehicleId) {
            deleteCar(vehicleId)
            .then(data=>{
                alert('删除成功');
                this.$refs.queryBox.defaultQuery();
            }).catch(err=>{
                alert('删除失败');
            });
        },
        myUpdateCar(vehicleID,type,changeBrand,chanegModel,changePerRent) {
            updateCar(vehicleID,type,changeBrand,chanegModel,changePerRent)
            .then(val=>{
                alert('修改成功');
                this.active = false;

                this.$refs.queryBox.defaultQuery();
            }).catch(err=>{
                console.log(err);
                alert('修改失败');
            })
        },
        disactive() {
            this.active = false;
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