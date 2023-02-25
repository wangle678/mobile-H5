<template>
  <div>
    <h1>{{message}}</h1>
    <van-image
      width="100"
      height="100"
      :src="zzq"
    />
    <div>count: {{ count }}</div>
    <div>double: {{ store.double }}</div>
    <van-button type="default" @click="store.increment()">计数器</van-button>
    <van-button type="default" @click="store.$reset()">重置</van-button>
  </div>
</template>

<script setup>
import zzq from "@/images/dl4.jpeg";
import {storeToRefs} from 'pinia';
import {useHomeStore} from '@/store/homeStore';

const store = useHomeStore();
const {count, message} = storeToRefs(store);   // 通过 storeToRefs 包裹，使 count 称为响应性数据
</script>

<style>

</style>