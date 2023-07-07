import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import router from '@/router';
import { pinia } from '@/store';

export const plugins = [BalmUI, BalmUIPlus, router, pinia];
