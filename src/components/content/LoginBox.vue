<template>
    <div class="login-box">
        <div class="logo">
            <img src="../../assets/logo.png" alt="logo">
        </div>
        <input type="text" class="login-input" :class="{'user-warning': isUserErr}" placeholder="用户名" ref="userName" @blur="checkUser">
        <input type="text" class="login-input" :class="{'user-warning': isPwErr}" placeholder="密码" ref="password" @blur="checkPw">
        <button class="login" @click="toLogin">登录</button>
    </div>
</template>

<script>
import {commitLog} from '../../network'

export default {
    name: 'LoginBox',
    data() {
        return {
            isPwErr: false,
            isUserErr: false,
        }
    },
    methods: {
        toLogin() {
            if(this.checkLogin()) {
                let userName = this.$refs.userName.value;
                let password = this.$refs.password.value;
                commitLog(userName,password).then(data=>{
                    // 更新登录名字
                    this.$store.commit('updateUserName',data.userName);
                    // 更新是否登录
                    this.$store.commit('updateLogin',true);
                    // 更新是否为管理员
                    this.$store.commit('updatePermission',data.permission);
                    // 跳转去home页面
                    this.$router.push('/home');
                }).catch(e=>{
                    console.log(e);
                    // 没登录成功，提醒重新的登录
                    alert("账号或密码错误，请重试！");
                });
            }
        },
        checkLogin() {
            return this.checkUser() & this.checkPw();
        },
        checkUser() {
            if(this.$refs.userName.value==='') {
                this.$refs.userName.placeholder = '用户名为空！';
                this.isUserErr = true;
                return false;
            }
            else this.isUserErr = false;
            return true;
        },
        checkPw() {
            if(this.$refs.password.value==='') {
                this.$refs.password.placeholder = '密码为空！';
                this.isPwErr = true;
                return false;
            }
            else this.isPwErr = false;
            return true;
        }
    }
}
</script>

<style>
    .login-box {
        display: flex;
        width: 360px;
        height: 400px;
        padding: 30px 0;
        background-color: #142654;
        border-radius: 8px;
        box-shadow: 0 0 20px 0 #fff;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .login-box .logo {
        height: 120px;
    }

    .login-box .logo img {
        height: 110%;
    }

    .login-box .login-input {
        width: 240px;
        height: 40px;
        padding: 0;
        border-bottom: 1px solid #c2ffd1;
        color: #fff;
        font-size: 18px;
        background-color: transparent;
    }

    .login-box .login-input::-webkit-input-placeholder {
        color: #c2ffd1;
    }

    .login-box .user-warning {
        border-bottom-color: #fe7e7e;
    }

    .login-box .user-warning::-webkit-input-placeholder {
        color: #fe7e7e;
    }

    .login-box .login {
        width: 200px;
        height: 35px;
        border: none;
        background-color: #c2ffd1;
        border-radius: 5px;
    }
</style>