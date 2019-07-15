import React from 'react';
import { Input, MainButton } from '../common';
import { WEATHER_KEY } from '../../private';

interface CoordsProps {
  setForecast:Function;
}
export class Zip extends React.Component<CoordsProps> {
  state = {
    zipInput: '',
  }

  handleSearch() {
    const request = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.zipInput},us&APPID=${WEATHER_KEY}&units=imperial&mode=json`;
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
          header="Zip"
          placeholder=" -"
          onChangeText={(text) => this.setState({ zipInput: text })}
        />
        <MainButton
          text="Let's go!"
          onPress={() => this.handleSearch()}
        />
      </>
    );
  }
}
