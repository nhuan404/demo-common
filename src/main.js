import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App)
    .use(antd)
    .use(store)
    .use(router)
    .mount('#app')
