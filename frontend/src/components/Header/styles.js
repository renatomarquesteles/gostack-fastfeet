import styled from 'styled-components';
import { darken } from 'polished';

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

    svg {
      display: none;
      cursor: pointer;
    }

    ul {
      display: flex;
      align-items: center;
      padding: 0 30px;
    }
  }

  @media (max-width: 960px) {
    padding: 0;

    img {
      display: none;
    }

    nav {
      max-width: 26px;
      padding: 0 12px;

      svg {
        height: 64px;
        display: block;
      }

      ul {
        transform: translateX(-200px);
        transition: transform 0.3s;

        position: absolute;
        left: 0;
        top: 63px;
        z-index: 2;

        background: #fff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        padding: 0;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        li {
          width: 100%;
          margin: 0;
          padding: 20px 30px;
          cursor: pointer;
          transition: background 0.3s;
        }
      }

      &:hover {
        max-width: 200px;

        ul {
          transform: translateX(0);

          li:hover {
            background: #ddd;
          }
        }
      }
    }
  }
`;

export const ListItem = styled.li`
  margin-right: 15px;

  a {
    color: #444;
    font-size: 15px;
    font-weight: bold;
    opacity: 0.7;
    transition: opacity 0.2s;

    &.active {
      opacity: 1;
    }
  }

  &:hover {
    a {
      opacity: 1;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 32px;
  background: rgba(0, 0, 0, 0.15);

  @media (max-width: 960px) {
    display: none;
  }
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

  button {
    background: transparent;
    border: 0;
    color: #de3b3b;

    &:hover {
      color: ${darken(0.08, '#de3b3b')};
      text-decoration: underline;
    }
  }

  @media (max-width: 960px) {
    padding: 0 12px;
  }
`;
