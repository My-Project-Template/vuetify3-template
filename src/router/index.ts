import { createRouter, createWebHashHistory } from 'vue-router';

/** @description router used by the app */
export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "AboutView" */ '../views/AboutView.vue'),
        },
    ],
});
