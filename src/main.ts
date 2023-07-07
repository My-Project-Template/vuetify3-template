import { createApp } from 'vue';
import App from './App.vue';
import { plugins } from './plugins';
import 'ress/dist/ress.min.css';
import 'balm-ui-css';

const app = createApp(App);
plugins.forEach(plugin => {
    app.use(plugin);
});

app.mount('#app');
