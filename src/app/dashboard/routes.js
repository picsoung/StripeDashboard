import * as components from './components';

export default [
  {
    path: '/',
    component: components.Home,
    name: 'home'
  },
  {
    path: '/customers/:customerId',
    component: components.CustomerProfile,
    name: 'customerProfile',
    props: {transactions:[]}
  }
];
