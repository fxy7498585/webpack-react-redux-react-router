import * as React from 'react';
import {connect} from 'react-redux';

 import actions from '../store/action/couter2';
import { Store, Counter2 } from '../types';
import { ICounter2Props, ICounterState } from '../interface/counter-interface';
import { func } from 'prop-types';

class CounterComponent2 extends React.Component<ICounter2Props, ICounterState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'bob',
    }
  }

  render() {
    let {add, addAsync} = this.props;
      return (
      <div>
        <p>{this.props.number2}</p>
        {/* <button  onClick={()=>this.setState({number:this.state.number + 1})}>+</button> */}
        <button onClick={add}>+++</button>
        <button onClick={addAsync}>+++</button>
      </div>
    )
  }

  count = () => {
    console.log('1');
    this.setState({
      // number: num++,
      name: 'alla',
    });
  }
}

let mapStateToProps = function(state: Store): Counter2 {
  console.log('state', state);
  return {
    number2: state.counter2.number2
  };
}

export default connect(mapStateToProps, actions)(CounterComponent2);