import React from 'react';
import {
  ButtonContainer,
  ButtonText
} from './subButtonStyles';

export interface SubButtonProps {
  text:string;
  onPress:Function;
  isSelected:boolean;
}

export class SubButton extends React.Component<SubButtonProps> {
  render() {
    return (
      <ButtonContainer
        onPress={() => this.props.onPress()}
        isSelected={this.props.isSelected}
      >
        <ButtonText
          isSelected={this.props.isSelected}
        >
          {this.props.text}
        </ButtonText>
      </ButtonContainer>
    );
  }
}
