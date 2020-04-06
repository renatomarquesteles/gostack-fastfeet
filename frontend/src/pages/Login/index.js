import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiLoader } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';
import { DefaultButton } from '~/components/Buttons/styles';
import Input from '~/components/Input';
import { signInRequest } from '~/store/modules/auth/actions';
import { Container } from './styles';

export default function Login() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  async function handleSubmit({ email, password }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      formRef.current.setErrors({});

      dispatch(signInRequest(email, password));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <img src={logo} alt="FastFeet" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          label="SEU E-MAIL"
          placeholder="exemplo@email.com"
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="SUA SENHA"
          placeholder="********"
        />
        <DefaultButton loading={loading} type="submit">
          {loading ? (
            <>
              <FiLoader size={20} color="#fff" />
              Carregando...
            </>
          ) : (
            'Entrar no sistema'
          )}
        </DefaultButton>
      </Form>
    </Container>
  );
}
