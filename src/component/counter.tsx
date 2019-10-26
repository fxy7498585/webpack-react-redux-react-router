import * as React from 'react';
import {connect} from 'react-redux';

import actions from '../store/action/couter';
import { withRouter } from 'react-router';
import { Store, Counter } from '../types';
import { ICounterProps, ICounterState } from '../interface/counter-interface';
import { func } from 'prop-types';
import { mapDispatchToProps } from '../store/bindActionCreators';

import './counter.scss'

class CounterComponent extends React.Component<ICounterProps, ICounterState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'alla',
    }
  }

  render() {
    console.log('props', this.props);
    let {add2} = this.props;
      return (
      <div>
        <p className="counter">{this.props.number}</p>
        {/* <button  onClick={()=>this.setState({number:this.state.number + 1})}>+</button> */}
        <button onClick={this.add}>+++</button>
        <button onClick={add2}>+++</button>
        <button onClick={this.goto}>goto</button>
      </div>
    )
  }

  goto = () => {
    console.log(1);
    console.log(this.props.history.push('./counter2'));
  }

  add = () => {
    this.props.add();
  }
  count = () => {
    console.log('1');
    this.setState({
      // number: num++,
      name: 'alla',
    });
  }
}

let mapStateToProps = function(state: Store): Counter {
  console.log('state', state);
  return {
    number: state.counter.number,
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterComponent));