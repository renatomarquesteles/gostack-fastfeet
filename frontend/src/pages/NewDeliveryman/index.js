import React, { useRef } from 'react';
import { FiChevronLeft, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import AvatarInput from './AvatarInput';
import { DefaultButton, SecondaryButton } from '~/components/Buttons/styles';
import Input from '~/components/Input';
import {
  ButtonGroup,
  Container,
  FormContainer,
  Header,
  InputWrapper,
} from './styles';

export default function NewDeliveryman() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de entregadores</h1>
          <ButtonGroup>
            <Link to="/deliverymen">
              <SecondaryButton>
                <FiChevronLeft size={20} color="#fff" />
                Voltar
              </SecondaryButton>
            </Link>
            <DefaultButton type="submit">
              <FiCheck size={20} color="#fff" />
              Salvar
            </DefaultButton>
          </ButtonGroup>
        </Header>
        <FormContainer>
          <AvatarInput name="avatar_id" />
          <InputWrapper>
            <label htmlFor="name">Nome</label>
            <Input id="name" name="name" placeholder="John Doe" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@fastfeet.com"
            />
          </InputWrapper>
        </FormContainer>
      </Form>
    </Container>
  );
}
