import { createApp } from 'vue';
import App from './App.vue';
import { plugins } from './plugins';
import 'ress/dist/ress.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/styles';

const app = createApp(App);
plugins.forEach(plugin => {
    app.use(plugin);
});

app.mount('#app');
