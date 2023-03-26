<template>
  <van-nav-bar title="首页" />

  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in imgList" :key="item.key">
      <img :src="item.imgSrc" alt="">
    </van-swipe-item>
  </van-swipe>

  <div class="book-container" v-for="item in list.bookList" :key="item.varietyKey" @click="toReading">
    <div class="variety-name">{{ item.varietyName }}</div>
    <div class="dis" v-for="varietyItem in item.varietyList" :key="varietyItem.bookKey">
      <div class="dis book-img-box">
        <img class="book-img" :src="varietyItem.bookImg" alt="">
      </div>
      <ul>
        <li>{{ varietyItem.bookName }}</li>
        <li>
          <span>{{ varietyItem.reading }}k阅读</span>
          <span>{{ varietyItem.chapter }}章节</span>
        </li>
        <li>{{ varietyItem.description }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from "pinia";
  import {
    useHomeStore,
    useHomeList
  } from "@/store/homeStore";
  import {
    showToast
  } from "vant";
  import {
    ref,
    onMounted
  } from "vue";
  import banner1 from "@/assets/banner1.jpeg";
  import banner2 from "@/assets/banner2.jpg";
  import banner3 from "@/assets/banner3.jpeg";

  const store = useHomeStore();
  const list = useHomeList();
  const { count, message } = storeToRefs(store); // 通过 storeToRefs 包裹，使 count 成为响应性数据
  let loginInfo = ref({});

  let imgList = [{
    key: 1,
    imgSrc: banner1
  }, {
    key: 2,
    imgSrc: banner2
  }, {
    key: 3,
    imgSrc: banner3
  }];

  /* 去阅读 */
  function toReading() {
    if (!!loginInfo && loginInfo?.isLogin) {
      showToast("功能还在开发中，别着急");
      return;
    }
    showToast("登录后才可继续操作哦");
  }

  onMounted(() => {
    loginInfo = JSON.parse(sessionStorage.getItem("isLoginInfo"));
  });
</script>

<style scoped>
.my-swipe {
  height: 16rem;
}

.my-swipe img {
  width: 100%;
  height: 100%;
}

.book-container {
  padding: 0rem 0.7rem;
  margin-top: 1.5rem;
}

.book-container > div:not(.variety-name) {
  border-bottom: 0.1rem solid rgba(220, 222, 224, 1);
  padding: 0.7rem 0px;
  align-items: center;
}

.variety-name {
  font-size: 2rem;
}

.book-container > div:last-child {
  border-bottom: none;
}

.book-container ul {
  padding-left: 1rem;
}

.book-container ul > li:nth-child(1) {
  font-size: 1.7rem;
}

.book-container ul > li:nth-child(2) {
  margin: 0.7rem 0px;
  color: var(--van-gray-6);
}

.book-container ul > li:nth-child(2) span:nth-child(1) {
  margin-right: 1.5rem;
}

.book-container ul > li:nth-child(3) {
  font-size: 1.3rem;
}

.book-img-box {
  width: 8rem;
  height: 10rem;
  box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.5);
  align-items: center;
}

.book-img {
  width: 8rem;
}
</style>