/** @description the main file */

import { createApp } from 'vue';
import App from './App.vue';
import { plugins } from './plugins';
import '@/assets/styles/scss/_global-conf.scss';

plugins.reduce((app, plugin) => app.use(plugin), createApp(App)).mount('#app');
