import React from 'react';

import logo from '~/assets/logo.png';
import {
  Divider,
  Header,
  HeaderContent,
  ListItem,
  Profile,
  Wrapper,
} from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header>
        <HeaderContent>
          <img src={logo} alt="FastFeet" />
          <Divider />
          <nav>
            <ul>
              <ListItem active>
                <a href="#">ENCOMENDAS</a>
              </ListItem>
              <ListItem>
                <a href="#">ENTREGADORES</a>
              </ListItem>
              <ListItem>
                <a href="#">DESTINATÁRIOS</a>
              </ListItem>
              <ListItem>
                <a href="#">PROBLEMAS</a>
              </ListItem>
            </ul>
          </nav>

          <Profile>
            <span>Admin FastFeet</span>
            <a href="#">sair do sistema</a>
          </Profile>
        </HeaderContent>
      </Header>
      {children}
    </Wrapper>
  );
}
