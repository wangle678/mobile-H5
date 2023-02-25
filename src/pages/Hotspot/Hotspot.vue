<template>
  <h1>
    {{ message }}
  </h1>
</template>

<script setup>
import {useHotspotStore} from '@/store/hotspotStore';
const store = useHotspotStore();
const {message} = store;
</script>

<style>

</style>