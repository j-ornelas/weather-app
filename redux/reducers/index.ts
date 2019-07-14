import { combineReducers } from 'redux';
import {
  currentLocation,
} from './locationReducers';
import { LocationInterface } from '../actions';

export interface StoreState {
  currentLocation: LocationInterface;
}

export const reducers = combineReducers<StoreState>({
  currentLocation,
});
