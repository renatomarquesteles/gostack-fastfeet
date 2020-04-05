import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px 30px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #444;
  }
`;

export const Tools = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  color: #666;
  cursor: pointer;
  transition: background 0.3s;

  svg {
    margin-right: 8px;
  }

  &:not(:first-child) {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }

  &:hover {
    background: ${darken(0.1, '#fff')};
  }
`;
