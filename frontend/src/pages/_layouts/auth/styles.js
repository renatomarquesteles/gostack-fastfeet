import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;
  background: #fff;
  padding: 50px 25px;
  border-radius: 4px;

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

    input {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
    }
  }
`;
