import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;

    label {
      margin: 5px 0;
      font-size: 12px;
      font-weight: bold;
      color: #444;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.04, '#7d40e7')};
      }
    }
  }
`;
