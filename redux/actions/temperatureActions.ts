import { ActionTypes } from '../types';

export interface WeatherInterface {
  dt_text:string;
  main:{
    temp:number;
    humidity:number;
    pressure:number;
  };
}
// Set current forecast
export interface SetForecastInterface {
  type:ActionTypes.SET_WEATHER_FORECAST;
  payload: Location;
}
export const setForecast = (forecast:WeatherInterface[]) => ({
  type: ActionTypes.SET_WEATHER_FORECAST,
  payload: forecast
})
