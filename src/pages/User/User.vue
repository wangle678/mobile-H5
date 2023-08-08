<template>
  <div class="head-portrait-box">
    <div class="head-portrait" @click="toLogin">
      <van-image
        round
        width="100%"
        height="100%"
        :src="isLoginInfo?.isLogin ? isLoginInfo.headPortrait : ''"
      />
      <div class="login-title" v-if="!isLoginInfo?.isLogin">未登录</div>
    </div>
    <div class="dis">
      <div class="collect dis">
        <van-icon name="star-o" />
        <span>收藏</span>
      </div>
      <div class="setting dis">
        <van-icon name="setting-o" />
        <span>设置</span>
      </div>
    </div>
  </div>

  <template v-for="item in configList.list" :key="item.key">
    <div class="list-box" @click="listClick(item.key)" v-if="item?.login">
      <van-icon :name="item.iconName" />
      {{ item.configTitle }}
    </div>
  </template>
</template>

<script setup>
  import {
    useRouter,
    onBeforeRouteLeave
  } from "vue-router";
  import {
    showConfirmDialog,
    showLoadingToast,
    closeToast,
    showToast
  } from 'vant';
  import {
    useUserConfigList
  } from '@/store/userStore';
  import {
    ref,
    onBeforeMount,
  } from "vue";

  const router = useRouter();
  let isLoginInfo = ref({});
  const configList = useUserConfigList();
  const { haveLoggedOn } = configList;

  onBeforeRouteLeave((to, from) => {
    // 如果登录了就不继续导航
    if (to.meta.requiresAuth && isLoginInfo?.isLogin) {
      return false;
    }
  });

  /* 去登陆 */
  function toLogin() {
    console.log("去登陆log");
    router.push({
      path: "/login"
    });
  }
  
  /* 列表项的点击事件 */
  function listClick (key) {
    if (key == 1) {
      checkUpdate();
    }
    if (key == 4) {
      logOut();
    }
  }

  /* 检查更新 */
  function checkUpdate() {
    showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: '正在检查更新'
    });
    setTimeout(() => {
      closeToast();
      showToast("已是最新版本");
    }, 2000);
  }

  /* 退出 */
  function logOut () {
    showConfirmDialog({
      title: "退出登录",
      message: "确定要退出登录吗",
      beforeClose: (action) => {
        return new Promise((resolve, reject) => {
          if (action == "cancel") {
            resolve(true);
          } else {
            setTimeout(() => {
              sessionStorage.removeItem("isLoginInfo");
              resolve(true);
              location.reload();
            }, 1000);
          }
        });
      }
    });
  }
  
  /* 声明周期部分 */
  onBeforeMount(() => {
    isLoginInfo = JSON.parse(sessionStorage.getItem("isLoginInfo"));
    if (isLoginInfo?.isLogin) {
      haveLoggedOn(true);
    }
  });
</script>

<style scoped>
/* 头像部分 开始 */
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
  /* line-height: 7rem; */
  font-size: 2.5rem;
  opacity: 1;
  color: var(--van-black);
  flex-direction: column;
  justify-content: center;
}

.head-portrait-box > div:nth-child(2) div span {
  font-size: 1.6rem;
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
/* 头像部分 结束 */

/* 列表部分 开始 */
.list-box {
  font-size: 1.8rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--van-gray-3);
  color: rgba(0, 0, 0, 0.7);
}

.list-box .van-icon {
  margin-right: 1rem;
}
/* 列表部分 结束 */
</style>