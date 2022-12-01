<template>
    <div id="loginContent">
        <LoginBox class="outer_login-box"></LoginBox>
    </div>
</template>

<script>
import LoginBox from '../components/content/LoginBox'

export default {
    name: 'LoginView',
    components: {LoginBox}
}
</script>

<style>
    #loginContent {
        width: 100%;
        height: 100%;
        background-color: rgba(194, 255, 209, .3);
    }

    .outer_login-box {
        position: absolute;
        left: 50%;
        margin-top: 40px;
        margin-left: -180px;
    }
</style>