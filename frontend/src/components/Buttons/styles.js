import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const DefaultButton = styled.button`
  height: 36px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  background: ${colors.primary};
  border: 0;
  border-radius: 4px;
  padding: 0 10px;
  display: flex;
  text-align: center;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, colors.primary)};
  }

  svg {
    margin-right: 5px;
  }
`;
