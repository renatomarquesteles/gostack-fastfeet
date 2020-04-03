import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';
import { Divider, Container, Content, ListItem, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

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
          <span>{profile.name}</span>
          <button type="button" onClick={handleLogOut}>
            Sair do sistema
          </button>
        </Profile>
      </Content>
    </Container>
  );
}
