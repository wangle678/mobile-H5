<template>
  <h1>
    {{ message }}
  </h1>
</template>

<script setup>
  import {useChatStore} from '@/store/chatStore';
  const store = useChatStore();
  const {message} = store;
</script>

<style>

</style>