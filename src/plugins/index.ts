import { createVuetify } from 'vuetify';
import router from '@/router';
import { pinia } from '@/store';

export const plugins = [router, pinia, createVuetify()];
