import styled from 'styled-components/native';
import { colors } from '../../utils/brand';

export const SearchContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${colors.GRAY}
`;

export const SearchTypeButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 25px;
  width: 100%;
`;
