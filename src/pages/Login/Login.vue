<template>
  <van-nav-bar
    title="登录"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  
  <div class="title">登录</div>

  <van-form>
    <van-cell-group class="input-box" inset>
      <van-field
        v-model="userName"
        label="账号"
        name="pattern"
        placeholder="请输入手机号"
        :rules="[{ pattern: userNamePattern, message: '请输入正确手机号' }]"
      />
      <van-field
        v-model="userPassword"
        label="密码"
        name="pattern"
        placeholder="请输入密码"
        type="password"
        :rules="[{ pattern: userPasswordPattern, message: '密码至少需要6位' }]"
      />
    </van-cell-group>
  </van-form>

  <div class="dis">
    <button class="login-btn" @click="loginClick">登录</button>
  </div>
  <span class="tip">没有账号？<i>去注册</i></span>
</template>

<script setup>
import { ref } from "vue";
import {
  useRouter
} from 'vue-router'
import {
  showToast,
  showNotify,
  showLoadingToast,
  closeToast
} from 'vant';
import { account, password } from "../../utils/accountInfo";

let userName = ref("");
let userPassword = ref("");
let router = useRouter();

/* 表单校验 */
const userNamePattern = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
const userPasswordPattern = /^(\d|\D){6,}$/;

/* 返回 */
const onClickLeft = () => history.back();

/* 登录事件 */
function loginClick () {
  if (!userName.value) {
    showToast("请输入账号");
    return;
  }
  if (!userPassword.value) {
    showToast("请输入密码");
    return;
  }
  loginReq(userName.value, userPassword.value).then((res) => {
    showNotify({
      type: 'success',
      message: res.message
    });
    sessionStorage.setItem("isLoginInfo", JSON.stringify(res));
    userName.value = "";
    userPassword.value = "";
    router.replace({
      path: "/user"
    });
  }).catch((err) => {
    showNotify({
      type: 'warning',
      message: err
    });
  });
}

function loginReq (userName, userPassword) {
  return new Promise((resolve, reject) => {
    showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: "登录中"
    });
    setTimeout(() => {
      if (userName != account || userPassword != password) {
        closeToast();
        reject("账号或密码错误");
      } else {
        closeToast();
        resolve({
          message: "登录成功",
          isLogin: true,
          headPortrait: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        });
      }
    }, 500);
  });
}
</script>

<style scoped>
.title {
  font-size: 2.6rem;
  letter-spacing: 1rem;
  text-align: center;
  margin-top: 10rem;
}

/* 表单样式 开始 */
.input-box {
  margin-top: 8rem;
}

.login-btn {
  width: 25rem;
  height: 4rem;
  border: none;
  background: linear-gradient(-200deg, #fac0e7, #aac2ee);
  color: #fff;
  border-radius: 1rem;
  font-weight: bold;
  letter-spacing: 1rem;
  margin: 5rem auto 0rem auto;
  font-size: 1.6rem;
}

.tip {
  margin-top: 1rem;
  display: block;
  text-align: center;
}

i {
  font-style: normal;
  color: #1989fa;
}
/* 表单样式 结束 */
</style>