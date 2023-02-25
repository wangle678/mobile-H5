<template>
  <h1>
    {{ message }}
  </h1>
</template>

<script setup>
  import {useUserStore} from '@/store/userStore';
  const store = useUserStore();
  const {message} = store;
</script>

<style>

</style>