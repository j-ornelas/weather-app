import { ActionTypes } from '../types';

export interface Location {
  name?:string;
  latitude:string;
  longitude:string;
}
// Set current location
export interface SetLocationInterface {
  type:ActionTypes.SET_LOCATION;
  payload: Location;
}
export const setLocation = (location:Location) => ({
  type: ActionTypes.SET_LOCATION,
  payload: location
})
