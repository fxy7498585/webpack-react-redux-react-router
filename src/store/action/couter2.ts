import { Dispatch } from 'redux';
import * as action from '../action-type';

export interface Add {
  type: typeof action.ADD2;
}
export interface Subtract {
  type: typeof action.SUBTRACT2;
}

export type Action = Add | Subtract;

export default { // actions
  add():Add  {
    return {type: action.ADD2};
  },

  subtract(): Subtract {
    return {type: action.SUBTRACT2};
  },

  addAsync(): any {
    return function (dispatch: any, getState: any) {
      console.log('getState',getState());
      setTimeout(() => {
        dispatch({type: action.ADD});
      }, 1000);
    }
  }
}