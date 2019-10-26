import * as React from 'react';

import * as ReactDom from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';

import CounterComponent from './component/counter';
import CounterComponent2 from './component/couter2'

ReactDom.render(
  <Provider store={store}>
    <CounterComponent />
    <CounterComponent2 />
  </Provider>,
  document.getElementById("app")
)