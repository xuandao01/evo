import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import loader from '@/components/loader.vue'

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.component('ELoader', loader);

router.isReady().then(()=> {
  app.mount("#app")
})
