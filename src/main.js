import { createApp } from 'vue';
import App from './App.vue';
import router from './api/router/router'; // 引入路由配置文件

const app = createApp(App);
app.use(router); // 使用路由配置
app.mount('#app'); // 挂载应用
