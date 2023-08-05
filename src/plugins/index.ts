import { createVuetify } from 'vuetify';
import { md2 as blueprint } from 'vuetify/blueprints';
import MomentUtils from '@date-io/moment';
import { locale } from '@/constants';
import router from '@/router';
import { pinia } from '@/store';

export const plugins = [
    router,
    pinia,
    createVuetify({
        blueprint,
        date: {
            adapter: new MomentUtils({
                locale,
            }),
        },
    }),
];
