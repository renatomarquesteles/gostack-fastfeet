import styled from 'styled-components';

export const Container = styled.div`
  height: 36px;
  padding: 0 10px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  input {
    width: 100%;
    color: #444;
    font-size: 14px;
    background: none;
    border: 0;

    ::placeholder {
      color: #999;
    }
  }
`;
