import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export const InsertImage = styled.label`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;

  background-color: white;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23BBBBBBFF' stroke-width='4' stroke-dasharray='3%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

  color: #bbb;
  font-size: 16px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 0.3s, color 0.3s;

  svg {
    transition: fill 0.3s;
  }

  &:hover {
    color: #aaa;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23AAAAAAFF' stroke-width='4' stroke-dasharray='3%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

    svg {
      fill: ${colors.primary};
    }
  }
`;
