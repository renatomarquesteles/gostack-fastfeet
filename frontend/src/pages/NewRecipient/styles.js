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
  padding: 10px 30px 25px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 100%;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
