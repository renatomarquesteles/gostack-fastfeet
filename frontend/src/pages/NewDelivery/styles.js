import styled from 'styled-components';

export const Container = styled.div`
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

export const Header = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;

  button:first-child {
    margin-right: 15px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 25px 30px;
`;

export const SelectGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const SelectWrapper = styled.div`
  width: 100%;

  &:first-child {
    margin-right: 15px;
  }

  label {
    font-weight: bold;
  }

  > div {
    margin-top: 6px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 15px;

  label {
    font-weight: bold;
  }

  input {
    margin-top: 6px;
  }
`;
