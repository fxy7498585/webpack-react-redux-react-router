import { Action, AddCounter2 } from './../action/couter'; //
import { Counter } from './../../types/index'; // store 的 interface

import * as types from '../action-type';  // action type
import { type } from 'os';


let initState: Counter = {
  number: 10,
}

export default function(state: Counter = initState, action:Action)  {
  console.log('action', action);
  switch(action.type) {
    case types.AddCounter2:
      return {
        ...state,
      };
      break;
    case types.ADD:
      return { number:state.number + 1 }
      break;
    case types.SUBTRACT:
        // 当action动作行为是SUBTRACT的时候，给number减1
      return { number:state.number - 1 }
      break;
    default:
      // 当没有匹配到则返回原本的state
      return state
      break;
  }
}