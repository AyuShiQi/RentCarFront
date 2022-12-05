<template>
   <div v-if="active" class="rent-card-content">
      <div class="rent-card">
         <div class="rent-card_header" @click="dis"><span class="x-button">关闭</span></div>
         <slot>

         </slot>
         <div class="ok-button-content"><button class="red-border-btn ok-button" @click="changeInfos">确认</button></div>
      </div>
   </div>

</template>

<script>
export default {
   name: 'RentCard',
   props: ['changeInfo','active','disactive'],
   methods: {
      changeInfos() {
         this.changeInfo();
      },
      dis() {
         this.disactive();
      }
   }
}
</script>

<style>
   @import '../../assets/css/btn.css';

   .rent-card-content-dis {
      display: none;
   }

   .rent-card-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0,0,0,.5);
   }

   .rent-card {
      display: flex;
      position: fixed;
      top: 50%;
      left: 50%;
      width: 360px;
      height: 200px;
      padding: 15px 20px;
      margin-top: -100px;
      margin-left: -180px;
      background: #fffdfa;
      border-radius: 8px;
      box-shadow: 0 0 10px 0 #fffdfaa9;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
   }

   .rent-card_header {
      width: 100%;
      text-align: right;
   }

   .rent-card_header .x-button {
      font-size: 18px;
      font-weight: 600;
      color: #f56c6c;
      cursor: pointer;
   }

   .rent-card .change-input-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .rent-card .change-title {
      font-size: 18px;
      color: #f56c6c;
   }

   .rent-card .change-input {
      width: 280px;
      height: 40px;
      padding: 5px 10px;
      margin-left: 10px;
      border-bottom: 1px solid #e3e3e3;
      font-size: 20px;
   }

   .rent-card .ok-button-content {
      width: 100%;
      display: flex;
      justify-content: center;
   }

   .rent-card .ok-button-content .ok-button {
      width: 100px;
      height: 40px;
   }
</style>