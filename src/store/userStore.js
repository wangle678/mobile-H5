import { defineStore } from 'pinia';
import { ref } from "vue";

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            message: "我的"
        }
    }
})

export const useUserConfigList = defineStore('configList', () => {
    const list = ref([{
        key: 1,
        configTitle: "检查更新",
        iconName: "replay",
        login: true
    }, {
        key: 2,
        configTitle: "反馈",
        iconName: "edit",
        login: true
    }, {
        key: 3,
        configTitle: "关于",
        iconName: "info-o",
        login: true
    }, {
        key: 4,
        configTitle: "退出",
        iconName: "revoke",
        login: false
    }]);

    function haveLoggedOn (bool) {
        list.value.forEach(element => {
            if (element.key == 4) {
                element.login = bool;
            }
        });
    }

    return {
        list,
        haveLoggedOn
    }
});