import * as React from 'react';
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import CounterComponent from '../component/counter';
import CounterComponent2 from '../component/couter2';

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <ul>
            <li><Link to="/counter">counter</Link></li>
            <li><Link to="/counter2">counter2</Link></li>
          </ul>
          <Route path="/counter" component={CounterComponent}></Route>
          <Route path="/counter2" component={CounterComponent2}></Route>
        </React.Fragment>
      </Router>
    )
  }
}

export default RouterComponent;