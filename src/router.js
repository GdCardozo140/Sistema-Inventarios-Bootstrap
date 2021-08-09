import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/views/PxLogin';
import Dashboard from '@/views/Dashboard/PxDashboard';
import Productos from '@/views/Productos/PxProductos';
import Pedidos from '@/views/Pedidos/Pedidos';
import Proveedores from '@/views/Proveedores/Proveedores';
import Clientes from '@/views/Clientes/Clientes';
import Empleados from '@/views/Empleados/Empleados';

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
    {
      path: '/productos',
      name: 'productos',
      component: Productos,
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Pedidos,
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: Proveedores,
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: Clientes,
    },
    {
      path: '/empleados',
      name: 'empleados',
      component: Empleados,
    },
  ],
});
