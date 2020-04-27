<template>
    <div class="container"><span>{{msg}}</div>
</template>

<script>
export default {
    data() {
        return{
            msg: 'Webpack 搭建Vue 环境基本完成'
        }
    }
}
</script>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:20px;
        color: lightblue;
        box-shadow: 5px 5px 5px 5px;
    }
</style>