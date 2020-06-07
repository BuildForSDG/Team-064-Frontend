import React from 'react';

const Order = React.lazy(() => import('./views/Order'));
const Community = React.lazy(() => import('./views/Community'));
const Edit = React.lazy(() => import('./views/Community/Editor'));
const View = React.lazy(() => import('./views/Community/View'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Order', component: Order },
  { path: '/community', exact: true, name: 'Community', component: Community },
  { path: '/community/edit', exact: true, name: 'Edit', component: Edit },
  { path: '/community/:id', exact: true, name: 'View', component: View }
];

export default routes;
