import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0;

  label {
    font-weight: bold;
    margin: 5px 0;
    font-weight: bold;
    color: #444;
  }

  input {
    height: 44px;
    padding: 0 15px;
    margin: 5px 0 0;
    border-radius: 4px;
    border: 1px solid
      ${(props) => (props.error ? '#f00' : 'rgba(0, 0, 0, 0.2)')};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: #f00;
  margin: -5px 0 10px;
`;
