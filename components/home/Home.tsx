import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../redux/reducers';
import { setLocation, setForecast, LocationInterface, WeatherInterface } from '../../redux/actions';
import { Header } from '../header/Header';
import { Search } from '../search/Search';
import { Graph } from '../graph/Graph';
import { WEATHER_KEY } from '../../private';

interface HomeProps {
  setLocation:Function;
  currentLocation: LocationInterface;
}
export class HomeComponent extends React.Component<HomeProps> {
  async componentDidMount() {
    // TODO: handle rejection gracefully.
    const currentLocation = await this.getLocation();
    const { coords } = currentLocation;
    if (coords.latitude && coords.longitude) {
      this.setLocation(coords);
      const request = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&APPID=${WEATHER_KEY}&units=imperial`;
      fetch(request)
        .then(res => res.json())
        .then(info => {
          if (info.list) this.props.setForecast(info.list);
        })
        .catch(err => console.log(err.toString()));
    }
  }

  async getLocation() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({ accuracy: 3 });
    }
  }

  setLocation(location:LocationInterface) {
    this.props.setLocation(location);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Search />
        <Graph />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ currentLocation }:StoreState) => ({
  currentLocation,
})
const mapActionsToProps = (dispatch:Dispatch) => ({
  setLocation(location:LocationInterface) {
    return dispatch(setLocation(location));
  },
  setForecast(forecast:WeatherInterface[]) {
    return dispatch(setForecast(forecast));
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const Home = connect(mapStateToProps, mapActionsToProps)(HomeComponent);
