import React from 'react';
import { SubButton } from '../common';
import { SearchContainer, SearchTypeButtons } from './searchStyles';
import { Coords } from './Coords';

export class Search extends React.Component {
  state = {
    searchingBy: 'COORDS' // COORDS, CITY, ZIP
  }

  handleSearch() {
    console.log('searching!');
  }

  renderSearchInput() {
    switch (this.state.searchingBy) {
      case 'COORDS':
        return <Coords />;
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
