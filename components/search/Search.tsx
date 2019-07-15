import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SubButton } from '../common';
import { SearchContainer, SearchTypeButtons } from './searchStyles';
import { Coords } from './Coords';
import { setForecast, WeatherInterface } from '../../redux/actions';


interface SearchProps {
  setForecast:Function;
}

export class SearchComponent extends React.Component<SearchProps> {
  state = {
    searchingBy: 'COORDS' // COORDS, CITY, ZIP
  }

  handleSearch() {
  }

  renderSearchInput() {
    switch (this.state.searchingBy) {
      case 'COORDS':
        return <Coords setForecast={(forecast:WeatherInterface[]) => this.props.setForecast(forecast)}/>;
      default:
        return null;
    }
  }

  render() {
    return (
      <SearchContainer>
        <SearchTypeButtons>
          <SubButton
            isSelected={this.state.searchingBy === 'COORDS'}
            text="Lat/Long"
            onPress={() => this.setState({ searchingBy: 'COORDS' })}
          />
          <SubButton
            isSelected={this.state.searchingBy === 'CITY'}
            text="City"
            onPress={() => this.setState({ searchingBy: 'CITY' })}
          />
          <SubButton
            isSelected={this.state.searchingBy === 'ZIP'}
            text="Zip"
            onPress={() => this.setState({ searchingBy: 'ZIP' })}
          />
        </SearchTypeButtons>
        {this.renderSearchInput()}
      </SearchContainer>
    );
  }
}

const mapActionsToProps = (dispatch:Dispatch) => ({
  setForecast(forecast:WeatherInterface[]) {
    return dispatch(setForecast(forecast));
  },
});

export const Search = connect(null, mapActionsToProps)(SearchComponent);
