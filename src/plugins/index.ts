import { createVuetify } from 'vuetify';
import { md2 as blueprint } from 'vuetify/blueprints';
import router from '@/router';
import { pinia } from '@/store';

export const plugins = [
    router,
    pinia,
    createVuetify({
        blueprint,
    }),
];
