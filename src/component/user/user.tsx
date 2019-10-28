import * as React from 'react';
import { withRouter } from 'react-router'
import {bindActionCreators, Dispatch} from 'redux';
import { connect } from 'react-redux'
import allAction from '../../store/action/allAction'

class userComponent extends React.Component {

  render() {
    return (
      <div>user</div>
    );
  }
}
let mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  add: allAction.counterAction.add,
}, dispatch);


let mapStateToProps = function(state) {
  console.log('state', state);
  return {
    number: state.counter.number,
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(userComponent));
