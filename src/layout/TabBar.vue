<script setup>
    import {ref} from 'vue';
    const active = ref(0);
    const tabberList = ref([
        {to: '/home', icon: 'home-o', tabName: '首页'},
        {to: '/hotspot', icon: 'fire-o', tabName: '热点'},
        {to: '/discover', icon: 'search', tabName: '发现'},
        {to: '/chat', icon: 'chat-o', tabName: '消息'},
        {to: '/user', icon: 'user-circle-o', tabName: '我的'}
    ]);
</script>

<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item v-for="item in tabberList" :key="item.icon" :replace="true" :to="item.to" :icon="item.icon">{{item.tabName}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style>

</style>