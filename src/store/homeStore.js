import { defineStore } from 'pinia';
import {ref} from 'vue';
import chartjsImg from "@/assets/chartjs-logo.svg"
import pnpmImg from "@/assets/pnpm.png"
import elementImg from "@/assets/element.png"
import babelImg from "@/assets/babel.png"
import CImg from "@/assets/C.jpg"
import symfonyImg from "@/assets/Symfony.png"

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            count: 0,
            message: "主页"
        }
    },

    getters: {
        double: (state) => state.count * 2,
    },

    actions: {
        increment() {
            this.count++;
        }
    }
});

export const useHomeList = defineStore('homeList', () => {
    let bookList = ref([{
        varietyKey: 1,
        varietyName: "前端",
        varietyList: [{
            bookKey: 1,
            bookName: "Chart.js",
            reading: 4.3,
            chapter: 277,
            bookImg: chartjsImg,
            description: "ChartJS使用HTML5Canvas元素的JavaScript图形库，支持6中统计图形，不依赖其他库。"
        }, {
            bookKey: 2,
            bookName: "pnpm v6.x 中文文档",
            reading: 4.3,
            chapter: 277,
            bookImg: pnpmImg,
            description: "pnpm是一个快速的、节省磁盘空间的包管理工具。"
        }, {
            bookKey: 3,
            bookName: "Element Plus v2.2 教程",
            reading: 4.3,
            chapter: 277,
            bookImg: elementImg,
            description: "Element Plus，饿了么开发团队基于Vue3，面向设计师和开发者的UI组件库。"
        }, {
            bookKey: 4,
            bookName: "Babel Handbook",
            reading: 4.3,
            chapter: 277,
            bookImg: babelImg,
            description: "关于如何使用 Babel 以及如何为 Babel 创建插件的指导手册。"
        }]
    }, {
        varietyKey: 2,
        varietyName: "后端",
        varietyList: [{
            bookKey: 1,
            bookName: "阮一峰《C语言教程》",
            reading: 4.3,
            chapter: 277,
            bookImg: CImg,
            description: "ChartJS使用HTML5Canvas元素的JavaScript图形库，支持6中统计图形，不依赖其他库。"
        }, {
            bookKey: 2,
            bookName: "Symfony 5 快速开发(v5.2)",
            reading: 4.3,
            chapter: 277,
            bookImg: symfonyImg,
            description: "Symfony 是一款基于MVC架构的PHP框架"
        }]
    }]);
    
    return {
        bookList
    }
});