<template>
    <div class="query-content">
        <select name="type" id="carType" class="select-box blue-btn" @change="typeSelect" ref="typeSelected">
            <option disabled hidden selected>车辆类型</option>
            <option v-for="item in types" :key="item" :value="item">{{item}}</option>
        </select>
        <select v-show="brandOk" name="brand" id="brand" class="select-box blue-btn" @change="brandSelect" ref="brandSelected">
            <option disabled hidden selected>品牌</option>
            <option v-for="item in brands" :key="item" :value="item">{{item}}</option>
        </select>
        <select v-show="modelOk" name="model" id="model" class="select-box blue-btn" @change="modelSelect" ref="modelSelected">
            <option disabled hidden selected>型号</option>
            <option v-for="item in models" :key="item" :value="item">{{item}}</option>
        </select>
        <input type="text" class="blue-btn query-input" id="queryInput" ref="vehicleInput">
        <button class="red-btn id-select-btn" @click="vehicleIdSelect">车牌号查询</button>
    </div>
</template>

<script>
import {getTypeCar,getTypeAndBrandCar,getTypeAndBrandAndModelCar,getVehicleIdCar,getCar} from '../../network'

export default {
    name: 'QueryBox',
    props: ['changeHeaderInfo','changeInfos'],
    data() {
        return {
            brandOk: false,
            modelOk: false,
            types: ['轿车','客车','货车'],
            brands: [],
            models: [],
            type: '',
            brand: '',
            model: '',
            vehicleID: ''
        }
    },
    methods: {
        defaultQuery(){
            const config = {};
            if(this.vehicleID!='') config.vehicleID = this.vehicleID;
            if(this.type!='') config.type = this.type;
            if(this.model!='') config.model = this.model;
            if(this.brand!='') config.brand = this.brand; 
            console.log(config);

            getCar(config)
            .then(data=>{
                console.log(data.infos);
                this.changeInfos(data.infos);
            }).catch(err=>{
                console.log(err);
            });
        },
        typeSelect(e) {
            this.type = e.target.value;

            this.defaultBrand();
            this.defaultModel();
            
            // 向后端请求数据
            getTypeCar(this.type)
            .then(data=>{
                // 拿出brands
                this.brands = data.brands;
                // 拿出infos
                this.changeInfos(data.infos);
                // 显示品牌列表
                this.brandOk = true;
            }).catch(e=>{
                console.log(e);
            });
        },
        brandSelect(e) {
            // 变换当前选择数据
            this.brand = e.target.value;

            this.defaultModel();

            getTypeAndBrandCar(this.type,this.brand)
            .then(data=>{
                // 拿出models
                this.models = data.models;
                // 拿出infos
                this.changeInfos(data.infos);
                // 显示model列表
                this.modelOk = true;
            }).catch(e=>{
                console.log(e);
            });
        },
        modelSelect(e) {
            console.log(e.target.value);
            // 变换当前选择数据
            this.model = e.target.value;

            getTypeAndBrandAndModelCar(this.type,this.brand,this.model)
            .then(data=>{
                // 拿出infos
                this.changeInfos(data.infos);
            }).catch(e=>{
                console.log(e);
            });
        },
        vehicleIdSelect() {
            if(this.$refs.vehicleInput.value==='') return;
            this.vehicleID = this.$refs.vehicleInput.value;
            getVehicleIdCar(this.vehicleID)
            .then(data=>{
                // 拿出infos
                this.changeInfos(data.infos);

                this.brandOk = this.modelOk = false;
                this.defaultType();
                this.vehicleID = '';
            }).catch(e=>{
                console.log(e);
            });
        },
        /**
         * 初始化typeSelect的列表
         */
        defaultType() {
            this.type = '';
            let options = this.$refs.typeSelected.options;
            for(let i = 0;i<options.length;i++) {
                options[i].selected = false;
            }
            options[0].selected = true;
        },
        defaultBrand() {
            this.brand = '';
            this.brands = [];
            let options = this.$refs.brandSelected.options;
            for(let i = 0;i<options.length;i++) {
                options[i].selected = false;
            }
            options[0].selected = true;
        },
        defaultModel() {
            this.model = '';
            this.models = [];
            let options = this.$refs.modelSelected.options;
            for(let i = 0;i<options.length;i++) {
                options[i].selected = false;
            }
            options[0].selected = true;
        }
    }
}
</script>

<style>
    @import '../../assets/css/btn.css';

    .query-content .select-box {
        height: 24px;
        margin: 0 10px;
    }

    .query-content .query-input {
        width: 140px;
        height: 24px;
        padding: 5px;
        margin: 0 10px;
    }

    .query-content .id-select-btn {
        width: 80px;
        height: 24px;
        margin: 0 10px;
    } 
</style>