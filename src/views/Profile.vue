<template>
    <div class="profile-view">
        <h2>用户名：{{$store.state.userName}}</h2>
        <h2>权限：{{$store.state.permission}}</h2>
    </div>
</template>

<script>
export default {
    name: 'ProfleView',
}
</script>

<style>
    .profile-view {
        padding: 20px;
    }
    
    .profile-view h2 {
        color: #2d3768;
    }
</style>