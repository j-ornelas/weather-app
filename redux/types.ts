import {
  SetLocationInterface,
  SetForecastInterface,
} from './actions';

export enum ActionTypes {
  SET_LOCATION,
  SET_WEATHER_FORECAST,
}

export type Action = SetLocationInterface|SetForecastInterface;
