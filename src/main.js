import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {createRouter, createWebHashHistory} from "vue-router";
import commonRoutes from "./router";

const router = createRouter({
    history: createWebHashHistory(),
    commonRoutes
})

createApp(App)
    .use(antd)
    .use(store)
    .use(router)
    .mount('#app')
