<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'

export default {
  name: 'App',
  components: {Header}
}
</script>

<style>
 @import './assets/css/base.css';

 #app {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  /* background: #fff5f5; */
 }
</style>
