import React from 'react';

// import { Container } from './styles';
import logo from '~/assets/logo.png';

export default function Login() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <label>SEU E-MAIL</label>
        <input type="email" placeholder="exemplo@email.com" />
        <label>SUA SENHA</label>
        <input type="password" placeholder="********" />
        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
