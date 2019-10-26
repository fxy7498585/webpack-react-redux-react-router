import { Action } from './../action/couter2'; // 
import { Store, Counter2 } from './../../types/index'; // store 的 interface

import * as types from '../action-type';  // action type


let initState: Counter2 = {
  number2: 10,
}

export default function(state: Counter2 = initState, action:Action)  {
  console.log('action', action);
  switch(action.type) {
    case types.ADD2:
      return { number2:state.number2 + 1 }
      break;
    case types.SUBTRACT2:
        // 当action动作行为是SUBTRACT的时候，给number减1
      return { number2:state.number2 - 1 }
      break;
    default:
      // 当没有匹配到则返回原本的state
      return state
      break;
  }
}