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

export const ModalInfo = styled.div`
  h3 {
    color: #444;
    font-size: 14px;
    margin-bottom: 7px;
  }

  strong,
  span {
    line-height: 20px;
    color: #666;
  }

  hr {
    margin: 10px 0;
  }

  span {
    display: block;
  }

  strong {
    margin-right: 5px;
  }

  img {
    max-width: 350px;
    margin-top: 10px;
  }
`;

export const ResponsiveTd = styled.td`
  span {
    max-width: 720px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 960px) {
      max-width: 560px;
    }

    @media (max-width: 768px) {
      max-width: 325px;
    }

    @media (max-width: 480px) {
      max-width: 215px;
    }
  }
`;
