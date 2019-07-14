import { Location } from '../actions';
import { ActionTypes, Action } from '../types';

const DEFAULT_LOCATION_STATE = {
  name: '',
  latitude: '',
  longitude: '',
}
export const currentLocation = (state:Location = DEFAULT_LOCATION_STATE, action:Action) => {
  switch(action.type) {
    case ActionTypes.SET_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
