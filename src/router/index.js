import Vue from 'vue';
import Router from 'vue-router';

import SplashScreen from '@/pages/SplashScreen';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SplashScreen',
      component: SplashScreen,
    },
  ],
});
