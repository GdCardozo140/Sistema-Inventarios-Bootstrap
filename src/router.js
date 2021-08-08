import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/PxLogin';
import Dashboard from '@/views/Dashboard/PxDashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});
