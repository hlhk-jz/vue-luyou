
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../components/home/HomeTs';
import VuexTs from '../../components/vuexTs/VuexTs';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: VuexTs,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;