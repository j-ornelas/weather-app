import styled from 'styled-components/native';
import { fonts } from '../../../utils/brand';

export const InputContainer = styled.View`
  display: flex;
  width: 100%;
  padding-bottom: 25px;
`;

export const InputHeader = styled.Text`
  font-size: 16px;
  padding-bottom: 5px;
`;

export const InputBody = styled.TextInput`
  height: 40px;
  border-radius: 3px;
  border-width: 0.2px;
  border-color: black;
`;
