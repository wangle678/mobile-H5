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
        configTitle: "检查更新"
    }, {
        key: 2,
        configTitle: "反馈"
    }, {
        key: 3,
        configTitle: "夜间模式"
    }, {
        key: 4,
        configTitle: "关于"
    }, {
        key: 5,
        configTitle: "退出"
    }]);

    return {
        list
    }
});