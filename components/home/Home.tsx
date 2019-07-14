import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../../redux/reducers';
import { setLocation, Location } from '../../redux/actions';

interface HomeProps {
  setLocation:Function;
}
export class HomeComponent extends React.Component<HomeProps> {
  componentDidMount() {
    // TODO: get initial location and set it.
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>this is the home view.</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ currentLocation }:StoreState) => ({
  currentLocation,
})
const mapActionsToProps = (dispatch:Dispatch) => ({
  setLocation(location:Location) {
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
