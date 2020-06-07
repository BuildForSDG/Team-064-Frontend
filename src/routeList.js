import React from 'react';

import Order from './views/Order'
import Community from './views/Community'
import Edit from './views/Community/Editor'
import View from './views/Community/View'
import Page404 from './views/Pages/Page404'

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Order },
  { path: '/community', exact: true, name: 'Community', component: Community },
  { path: '/community/edit', exact: true, name: 'Edit', component: Edit },
  { path: '/community/edit/:id', exact: true, name: 'Edit', component: Edit },
  { path: '/community/:id', exact: true, name: 'View', component: View },
  { path: '/', exact: false, name: 'Home', component: Page404 }
];

export default routes;