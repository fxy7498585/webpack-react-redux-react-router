import * as React from 'react';

import * as ReactDom from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';

import App from './app/App'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)