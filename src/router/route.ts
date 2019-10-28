import * as React from 'react';

import layoutComponent from '../component/layout/layout';
import userComponent from '../component/user/user';
import CounterComponent from '../component/counter'

const routes = [
  {
    path: '/',
    // exact: true,
    component: layoutComponent,
    children: [
      {
        path: '/user',
        component: userComponent
      },{
        path: '/counter',
        component: CounterComponent
      }
    ]
  }
]

export {routes};