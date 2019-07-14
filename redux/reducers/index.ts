import { combineReducers } from 'redux';
import {
  currentLocation,
} from './locationReducers';
import { Location } from '../actions';

export interface StoreState {
  currentLocation: Location;
}

export const reducers = combineReducers<StoreState>({
  currentLocation,
});
