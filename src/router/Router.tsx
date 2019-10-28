import * as React from 'react';
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import CounterComponent from '../component/counter';
import CounterComponent2 from '../component/couter2';
import layoutComponent from '../component/layout/layout'

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={layoutComponent}></Route>
          <Route path="/counter" component={CounterComponent}></Route>
          <Route path="/counter2" component={CounterComponent2}></Route>
        </React.Fragment>
      </Router>
    )
  }
}

export default RouterComponent;