import styled from 'styled-components/native';
import { colors } from '../../../utils/brand';
import { SubButtonProps } from './SubButton';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50px;
  background-color: ${(props:SubButtonProps) => props.isSelected ? colors.PINK : colors.WHITE}
  border-width: 1px;
  border-color: ${(props:SubButtonProps) => props.isSelected ? colors.WHITE :colors.PINK}
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: ${(props:SubButtonProps) => props.isSelected ? colors.WHITE :colors.PINK};
  font-weight: bold;
`;
