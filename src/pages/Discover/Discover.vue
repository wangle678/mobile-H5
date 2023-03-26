<template>
  <h1>
    {{ message }}
  </h1>
</template>

<script setup>
  import {useDiscoverStore} from '@/store/discoverStore';
  const store = useDiscoverStore();
  const {message} = store;
</script>

<style>
h1 {
  text-align: center;
}
</style>