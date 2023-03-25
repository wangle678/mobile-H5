<template>
  <div class="head-portrait-box">
    <div class="head-portrait">
      <van-image
        round
        width="100%"
        height="100%"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <div class="login-title" v-if="!isLogin">请登录</div>
    </div>
    <div class="dis">
      <div class="collect">
        <van-icon name="star-o" />
      </div>
      <div class="setting">
        <van-icon name="setting-o" />
      </div>
    </div>
  </div>
  <div v-for="item in configList.list" :key="item.key">{{ item.configTitle }}</div>
</template>

<script setup>
  import {useUserConfigList} from '@/store/userStore';
  
  import {
    ref,
    onBeforeMount
  } from "vue";

  let isLogin = ref();
  const configList = useUserConfigList();
  
  onBeforeMount(() => {
    isLogin = sessionStorage.getItem("isLogin");
  });
</script>

<style scoped>
.head-portrait-box {
  position: relative;
  padding-top: 0.1px;
  height: 19rem;
}

.head-portrait-box::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#affaf8,#3887ff);
  opacity: 0.6;
  position: absolute;
  top: 0px;
  z-index: -1;
}

.head-portrait {
  width: 6rem;
  height: 6rem;
  background: var(--van-white);
  border-radius: 50%;
  margin: 3rem auto 0;
}

.head-portrait-box > div:nth-child(2) {
  width: 100%;
  height: 7rem;
  background: var(--van-white);
  position: absolute;
  bottom: 0px;
  opacity: 0.5;
}

.head-portrait-box > div:nth-child(2) div {
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 7rem;
  font-size: 2.5rem;
  opacity: 1;
  color: var(--van-black);
}

.head-portrait-box > div:nth-child(2) .setting {
  margin-left: auto;
}

.login-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
}
</style>