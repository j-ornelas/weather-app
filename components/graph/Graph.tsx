import React from 'react';
import {
  LineChart,
} from 'react-native-chart-kit'
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';
import { WeatherInterface } from '../../redux/actions';
import { GraphContainer, GraphTypeButtons } from './graphStyles';
import { colors } from '../../utils/brand';
import { SubButton } from '../common';

interface GraphProps {
  currentForecast:WeatherInterface[];
}
export class GraphComponent extends React.Component<GraphProps> {
  state = {
    typeToShow: 'temp'
  }

  generateTitles():string[] {
    if (!this.props.currentForecast.length) return [];
    return this.props.currentForecast.map((weather) => weather.dt_text);
  }

  generateData(type:string):number[] {
    if (!this.props.currentForecast.length) return [];
    return this.props.currentForecast.map((weather) => weather.main[type]);
  }

  render() {
    return (
      <GraphContainer>
      {this.props.currentForecast.length > 0 && (
        <>
        <GraphTypeButtons>
          <SubButton
            isSelected={this.state.typeToShow === 'temp'}
            text="Temp"
            onPress={() => this.setState({ typeToShow: 'temp' })}
          />
          <SubButton
            isSelected={this.state.typeToShow === 'humidity'}
            text="Humidity"
            onPress={() => this.setState({ typeToShow: 'humidity' })}
          />
          <SubButton
            isSelected={this.state.typeToShow === 'pressure'}
            text="Pressure"
            onPress={() => this.setState({ typeToShow: 'pressure' })}
          />
        </GraphTypeButtons>
        <LineChart
          data={{
            datasets: [{
              data: this.generateData(this.state.typeToShow)
            }]
          }}
          width={Dimensions.get('window').width * 0.8}
          height={300}
          chartConfig={{
            backgroundGradientFrom: colors.PURPLE,
            backgroundGradientTo: colors.PINK,
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 5
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        </>
      )}
      </GraphContainer>
    );
  }
}

const mapStateToProps = ({ currentForecast }:StoreState) => ({
  currentForecast,
})

export const Graph = connect(mapStateToProps, null)(GraphComponent);
