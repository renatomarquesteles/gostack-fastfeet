import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 64px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 26px;
    padding-right: 30px;
  }

  nav {
    flex: 1;

    ul {
      display: flex;
      align-items: center;
      padding: 0 30px;
    }
  }
`;

export const ListItem = styled.li`
  margin-right: 15px;
  opacity: ${(props) => (props.active ? 1 : 0.7)};

  a {
    color: #444;
    font-size: 15px;
    font-weight: bold;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 32px;
  background: rgba(0, 0, 0, 0.15);
`;

export const Profile = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    color: #666;
    font-weight: bold;
  }

  a {
    color: #de3b3b;
  }
`;
