<template>
   <div v-if="active" class="info-card-content">
      <div class="info-card">
         <div class="info-card_header" @click="dis"><span class="x-button">关闭</span></div>
         <slot>

         </slot>
         <div class="ok-button-content"><button class="red-border-btn ok-button" @click="changeInfos">确认</button></div>
      </div>
   </div>

</template>

<script>
export default {
   name: 'InfoCard',
   props: ['changeInfo','active','disactive'],
   methods: {
      changeInfos() {
         this.changeInfo();
         this.dis();
      },
      dis() {
         this.disactive();
      }
   }
}
</script>

<style>
   @import '../../assets/css/btn.css';

   .info-card-content-dis {
      display: none;
   }

   .info-card-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0,0,0,.5);
   }

   .info-card {
      display: flex;
      position: fixed;
      top: 50%;
      left: 50%;
      width: 400px;
      height: 400px;
      padding: 15px 20px;
      margin-top: -200px;
      margin-left: -200px;
      background: #fffdfa;
      border-radius: 8px;
      box-shadow: 0 0 10px 0 #fffdfaa9;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
   }

   .info-card_header {
      text-align: right;
   }

   .info-card_header .x-button {
      font-size: 18px;
      font-weight: 600;
      color: #f56c6c;
      cursor: pointer;
   }

   .info-card .change-input-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .info-card .change-title {
      font-size: 18px;
      color: #f56c6c;
   }

   .info-card .change-input {
      width: 280px;
      height: 40px;
      padding: 5px 10px;
      margin-left: 10px;
      border-bottom: 1px solid #e3e3e3;
      font-size: 20px;
   }

   .info-card .ok-button-content {
      width: 100%;
      display: flex;
      justify-content: center;
   }

   .info-card .ok-button-content .ok-button {
      width: 100px;
      height: 40px;
   }
</style>