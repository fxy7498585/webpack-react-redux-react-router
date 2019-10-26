import { Subtract } from './../store/action/couter';
import { string } from "prop-types"

export interface ICounterProps {
  add: any;
  number: number;
  add2: any;
}

export interface ICounter2Props {
  add: any;
  subtract: any;
  addAsync: any;
  number2: number;
}
export interface ICounterState {
  name: string
};