import { WeatherInterface } from '../actions';
import { ActionTypes, Action } from '../types';


export const currentForecast = (state:WeatherInterface[] = [], action:Action) => {
  switch(action.type) {
    case ActionTypes.SET_WEATHER_FORECAST:
      return action.payload;
    default:
      return state;
  }
}
