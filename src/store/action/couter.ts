import { Dispatch } from 'redux';
import * as action from '../action-type';

export interface Add {
  type: typeof action.ADD;
}
export interface Subtract {
  type: typeof action.SUBTRACT;
}

export interface AddCounter2 {
  type: typeof action.AddCounter2;
}

export type Action = Add | Subtract | AddCounter2;

export default { // actions
  add():Add  {
    return {type: action.ADD};
  },

  subtract(): Subtract {
    return {type: action.SUBTRACT};
  },

  addCounter2(): AddCounter2 {
    return {type: action.AddCounter2};
  },
  
  addAsync(): any {
    return function (dispatch: any, getState: any) {
      setTimeout(() => {
        dispatch({type: action.ADD, number2: getState().counter2.number2});
      }, 1000);
    }
  }
}