import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const ActionsList = styled.div`
  position: absolute;
  z-index: 1;
  width: 150px;
  left: calc(50% - 75px);
  background: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: calc(50% - 8px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #888;
  }
`;
