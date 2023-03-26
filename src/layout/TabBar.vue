<template>
  <router-view></router-view>
  <van-tabbar ref="myTabber" v-model="active" route>
    <van-tabbar-item
      v-for="item in tabberList"
      :key="item.icon"
      :replace="true"
      :to="item.to"
      :name="item.name"
      :icon="item.icon"
    >
      {{ item.tabName }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import {
	ref,
  onMounted
} from "vue";

const myTabber = ref(null);
const active = ref("home");
const tabberList = ref([
  { to: "/home", name: "home", icon: "home-o", tabName: "首页" },
  { to: "/discover", name: "discover", icon: "search", tabName: "发现" },
  { to: "/chat", name: "chat", icon: "chat-o", tabName: "消息" },
  { to: "/user", name: "user", icon: "user-circle-o", tabName: "我的" }
]);

onMounted(() => {
  let tabber = myTabber.value;
  document.querySelector("#app").style.marginBottom = tabber.$el.offsetHeight + "px";
});
</script>

<style>
</style>