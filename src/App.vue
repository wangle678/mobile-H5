<template>
  <router-view></router-view>
</template>

<script setup>
import {
  onBeforeMount
} from 'vue';
import {
  useRouter
} from "vue-router";
import {
  showToast
} from 'vant';
// import HelloWorld from './components/HelloWorld.vue'

let isLogin = sessionStorage.getItem("isLogin");
let router = useRouter();

/* onBeforeMount(() => {
  if (!JSON.parse(isLogin)) {
    showToast({
      message: "登录过期请重新登录"
    });
    router.replace({
      path: "/home"
    })
    sessionStorage.removeItem("isLogin");
  }
}); */
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
