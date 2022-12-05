<template>
    <div class="choose-box">
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
    name: 'ChooseBox'
}
</script>

<style>
    .choose-box {
        display: flex;
        width: 100%;
        height: 70px;
        border-bottom: 1px solid #e8efff;
        box-shadow: 0 0 20px 0 #e8efff;
        /* background: pink; */
        align-items: center;
        justify-content: center;
    }
</style>