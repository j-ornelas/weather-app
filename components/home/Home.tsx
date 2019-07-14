import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../redux/reducers';
import { setLocation, LocationInterface } from '../../redux/actions';

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
      <View style={styles.container}>
        <Text>your location is {this.props.currentLocation.latitude}, {this.props.currentLocation.longitude}</Text>
      </View>
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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Home = connect(mapStateToProps, mapActionsToProps)(HomeComponent);
