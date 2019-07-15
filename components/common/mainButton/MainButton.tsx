import React from 'react';
import {
  ButtonContainer,
  ButtonText
} from './mainButtonStyles';


interface MainButtonProps {
  text:string;
  onPress:Function;
}

export class MainButton extends React.Component<MainButtonProps> {
  render() {
    return (
      <ButtonContainer onPress={() => this.props.onPress()}>
        <ButtonText>
          {this.props.text}
        </ButtonText>
      </ButtonContainer>
    );
  }
}
