import { ActionTypes } from '../types';

export interface LocationInterface {
  name?:string;
  latitude:number;
  longitude:number;
}
// Set current location
export interface SetLocationInterface {
  type:ActionTypes.SET_LOCATION;
  payload: Location;
}
export const setLocation = (location:LocationInterface) => ({
  type: ActionTypes.SET_LOCATION,
  payload: location
})
