import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from '../router/route'

import RouterComponent from '../router/Router'
import layoutComponent from '../component/layout/layout'

class App extends React.Component {
  render() {
    // return (
    //   <RouterComponent />
    // )
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    );
  }
}

export default App
