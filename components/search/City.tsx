import React from 'react';
import { Input, MainButton } from '../common';
import { WEATHER_KEY } from '../../private';

interface CoordsProps {
  setForecast:Function;
}
export class City extends React.Component<CoordsProps> {
  state = {
    cityInput: '',
  }

  handleSearch() {
    const request = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityInput},us&APPID=${WEATHER_KEY}&units=imperial&mode=json`;
    fetch(request)
      .then(res => res.json())
      .then(info => {
        if (info.list) this.props.setForecast(info.list);
      })
      .catch(err => console.log(err.toString()));
  }

  render() {
    return (
      <>
        <Input
          header="City"
          placeholder=" -"
          onChangeText={(text) => this.setState({ cityInput: text })}
        />
        <MainButton
          text="Let's go!"
          onPress={() => this.handleSearch()}
        />
      </>
    );
  }
}
