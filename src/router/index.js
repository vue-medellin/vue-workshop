import Vue from 'vue';
import Router from 'vue-router';

import SplashScreen from '@/pages/SplashScreen';
import Items from '@/pages/Items';
import Options from '@/pages/Options';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SplashScreen',
      component: SplashScreen,
    },
    {
      path: '/items',
      name: 'Items',
      component: Items,
    },
    {
      path: '/items/:option',
      name: 'Options',
      component: Options,
    },
  ],
});
