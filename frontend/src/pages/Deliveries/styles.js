import styled from 'styled-components';

const handleStatusBackground = (status) => {
  switch (status) {
    case 'delivered':
      return '#DFF0DF';
    case 'canceled':
      return '#FAB0B0';
    case 'pending':
      return '#F0F0DF';
    case 'withdrawal':
      return '#BAD2FF';
  }
};

const handleStatusColor = (status) => {
  switch (status) {
    case 'delivered':
      return '#2CA42B';
    case 'canceled':
      return '#DE3B3B';
    case 'pending':
      return '#C1BC35';
    case 'withdrawal':
      return '#4D85EE';
  }
};

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

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Status = styled.div`
  background: ${(props) => handleStatusBackground(props.status)};
  color: ${(props) => handleStatusColor(props.status)};
  border-radius: 12px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  padding: 7px;

  display: flex;
  align-items: center;

  span {
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background-color: ${(props) => handleStatusColor(props.status)};
    margin-right: 5px;
  }
`;
