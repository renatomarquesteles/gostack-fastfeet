import React, { useRef } from 'react';
import { Form } from '@unform/web';

import logo from '~/assets/logo.png';
import Input from '~/components/Input';
import { Container } from './styles';

export default function Login() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    let errors = {};

    if (data.email === '') {
      errors.email = 'O e-mail é obrigatório';
    }

    if (data.password === '') {
      errors.password = 'A senha é obrigatória';
    }

    formRef.current.setErrors(errors);
  }

  return (
    <Container>
      <img src={logo} alt="FastFeet" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="email">SEU E-MAIL</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
        />
        <label htmlFor="password">SUA SENHA</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="********"
        />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
