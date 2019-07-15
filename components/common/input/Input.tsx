import React from 'react';
import {
  InputContainer,
  InputHeader,
  InputBody,
} from './inputStyles';


interface InputProps {
  header:string;
  placeholder:string;
  onChangeText:(text:string) => void;
}

export class Input extends React.Component<InputProps> {
  render() {
    return (
      <InputContainer>
        <InputHeader>{this.props.header}</InputHeader>
        <InputBody
          placeholder={this.props.placeholder}
          onChangeText={(text) => this.props.onChangeText(text)}
        />
      </InputContainer>
    );
  }
}
