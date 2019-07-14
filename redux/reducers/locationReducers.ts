import { LocationInterface } from '../actions';
import { ActionTypes, Action } from '../types';

const DEFAULT_LOCATION_STATE = {
  name: '',
  latitude: null,
  longitude: null,
}
export const currentLocation = (state:LocationInterface = DEFAULT_LOCATION_STATE, action:Action) => {
  switch(action.type) {
    case ActionTypes.SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
