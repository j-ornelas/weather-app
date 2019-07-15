import { combineReducers } from 'redux';
import {
  currentLocation,
} from './locationReducers';
import {
  currentForecast,
} from './temperatureReducers';

import { LocationInterface, WeatherInterface } from '../actions';

export interface StoreState {
  currentLocation: LocationInterface;
  currentForecast: WeatherInterface[];
}

export const reducers = combineReducers<StoreState>({
  currentLocation,
  currentForecast,
});
