<template>
    <div class="main-layout">
        <div class="nav-layout">
            <div class="nav-section">
                <router-link :to="{name: 'ProjectIndex'}" :class="{active: $route.name === 'ProjectIndex'}">产品</router-link>
                <router-link :to="{name: 'VersionIndex'}" :class="{active: $route.name === 'VersionIndex'}">版本管理</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
    .main-layout{
        padding: 10px;
        padding-top: 60px;
        position: relative;
    }
    .nav-layout{
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        padding: 0 10px;
    }
    .nav-section{
        width: 100%;
        background: #fff;
        box-shadow: 0 0 5px #EEE;
        display: flex;
    }
    .nav-section a{
        position: relative;
        padding: 0 15px;
        margin: 0 10px;
        line-height: 40px;
        list-style: none;
        font-weight: 500;
        color: #464c5b;
    }
    .nav-section a::before{
        position: absolute;
        content: "";
        left: 0;
        bottom: -3px;
        height: 3px;
        width: 100%;
        background: #5cadff;
        display: none;
    }
    .nav-section a.active{
        color: #5cadff;
    }
    .nav-section a.active::before{
        display: block;
    }
    .main{
        padding: 10px;
        background: #fff;
        height: 100%;
        box-shadow: 0 0 5px #EEE;
    }
    

</style>

