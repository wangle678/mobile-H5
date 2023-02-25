import {createRouter, createWebHashHistory} from 'vue-router';

import TabBar from '../layout/TabBar.vue';
import Home from '../pages/Home/Home.vue';      /* 首页 */
import Hotspot from '../pages/Hotspot/Hotspot.vue';     /* 热点 */
import Discover from '../pages/Discover/Discover.vue';  /* 发现 */
import Chat from '../pages/Chat/Chat.vue';      /* 消息 */
import User from '../pages/User/User.vue';      /* 我的 */

const routes = [
    {
        path: '/',
        component: TabBar,
        children: [
            { path: '/', component: Home }
        ]
    },
    {
        path: '/hotspot',
        component: TabBar,
        children: [
            { path: '/hotspot', component: Hotspot }
        ]
    },
    {
        path: '/discover',
        component: TabBar,
        children: [
            { path: '/discover', component: Discover }
        ]
    },
    {
        path: '/chat',
        component: TabBar,
        children: [
            { path: '/chat', component: Chat }
        ]
    },
    {
        path: '/user',
        component: TabBar,
        children: [
            { path: '/user', component: User }
        ]
    },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;