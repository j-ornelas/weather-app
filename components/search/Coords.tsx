import React from 'react';
import { Input, MainButton } from '../common';
import { WEATHER_KEY } from '../../private';

interface CoordsProps {
  setForecast:Function;
}
export class Coords extends React.Component<CoordsProps> {
  state = {
    latInput: '',
    longInput: '',
  }

  handleSearch() {
    const request = `https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1`;
    // const request = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latInput}&lon=${this.state.longInput}&APPID=${WEATHER_KEY}&units=imperial`;
    console.log(request)
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
          header="Latitude"
          placeholder=" -"
          onChangeText={(text) => this.setState({ latInput: text })}
        />
        <Input
          header="Longitude"
          placeholder=" -"
          onChangeText={(text) => this.setState({ longInput: text })}
        />
        <MainButton
          text="Let's go!"
          onPress={() => this.handleSearch()}
        />
      </>
    );
  }
}
