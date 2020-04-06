import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

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
          <FiMenu size={26} color="#7d40e7" />
          <ul>
            <ListItem>
              <NavLink to="/deliveries">ENCOMENDAS</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/deliverymen">ENTREGADORES</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/recipients">DESTINATÁRIOS</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/problems">PROBLEMAS</NavLink>
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
