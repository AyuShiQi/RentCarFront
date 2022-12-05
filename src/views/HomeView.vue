<template>
    <div v-if="!$store.state.isLogin">请登录！</div>
    <AdminHome v-else-if="$store.state.isAdmin"></AdminHome>
    <UserHome v-else></UserHome>
</template>

<script>
import AdminHome from '../components/content/AdminHome'
import UserHome from '../components/content/UserHome'
import Profile from './Profile.vue'

export default {
    name: 'HomeView',
    components: {AdminHome,UserHome,Profile}
}
</script>

<style>

</style>