import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { Divider, Container, Content, ListItem, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="FastFeet" />
        <Divider />
        <nav>
          <ul>
            <ListItem active>
              <Link to="/deliveries">ENCOMENDAS</Link>
            </ListItem>
            <ListItem>
              <Link to="/deliverymen">ENTREGADORES</Link>
            </ListItem>
            <ListItem>
              <Link to="/recipients">DESTINATÁRIOS</Link>
            </ListItem>
            <ListItem>
              <Link to="/problems">PROBLEMAS</Link>
            </ListItem>
          </ul>
        </nav>

        <Profile>
          <span>Admin FastFeet</span>
          <Link to="/logout">sair do sistema</Link>
        </Profile>
      </Content>
    </Container>
  );
}
