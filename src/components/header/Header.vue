<template>
    <div class="header-bottom">
        <header class="header">
            <router-link to="/home" class="header-logo">
                <img src="../../assets/logo.png" alt="logo">
            </router-link>
            <router-link v-if="!isLogin" to="/login" class="header-login">登录</router-link>
            <UserProfile v-else></UserProfile>
        </header>
    </div>
</template>

<script>
import UserProfile from './UserProfile'

export default {
    components: {
        UserProfile
    },
    computed: {
        isLogin() {
            return this.$store.state.isLogin;
        }
    }
}
</script>

<style>
    .header-bottom {
        width: 100%;
        height: 49px;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 49px;
        padding: 0 2%;
        background-color: #1e46ad;
        box-shadow: 0 0 5px 0 #004cff;
        justify-content: space-between;
        align-items: center;
    }

    .header .header-logo {
        overflow: hidden;
        height: 100%;
        cursor: pointer;
    }

    .header .header-logo img {
        height: 120%;
        object-fit: contain;
    }

    .header .header-login {
        color: #fff;
        transition: color .3s ease 0s;
    }

    .header .header-login:hover {
        color: #c2ffd1;
    }
</style>