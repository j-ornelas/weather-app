import styled from 'styled-components/native';
import { colors } from '../../../utils/brand';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${colors.PINK}
  border-radius: 4px;

`;

export const ButtonText = styled.Text`
  color: ${colors.WHITE};
  font-weight: bold;
`;
