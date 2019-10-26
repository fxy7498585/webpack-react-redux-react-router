import {bindActionCreators, Dispatch} from 'redux';

import action from './action/couter';
import actions from './action/couter2';

export const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  add: action.add,
  add2: actions.add
}, dispatch)

