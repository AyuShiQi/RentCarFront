<template>
  <div class="user-profile">
        <p class="user-name">WelCome!</p>
        <router-link to="/profile" class="user-img">
            <!-- <img src="" alt=""> -->
        </router-link>
  </div>
</template>

<script>
export default {
    name: "userProfile"
}
</script>

<style>
    .user-profile {
        display: flex;
        width: 140px;
        justify-content: space-between;
        align-items: center;
    }

    .user-profile .user-name {
        overflow: hidden;
        width: 80px;
        color: #fff;
        font-size: 16px;
        flex-wrap: nowrap;
    }

    .user-profile .user-img {
        width: 40px;
        height: 40px;
        background-color: #c2ffd1;
        border-radius: 50%;
        transition: all .3s ease 0s;
        cursor: pointer;
    }

    .user-profile .user-img:hover {
        box-shadow: 0 0 8px 0 #c2ffd1;
    }
</style>