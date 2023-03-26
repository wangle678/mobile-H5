import { defineStore } from 'pinia';
import { ref } from "vue";

export const useTabBarStore = defineStore("tabBarState", () => {
    let state = ref(0);
    function setState (argu) {
        console.log("state: ", state);
        // console.log("argu: ", argu);
        // state = argu;
    }
    return {
        state,
        setState
    }
})