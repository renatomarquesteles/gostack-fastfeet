import React, { useRef } from 'react';
import { FiChevronLeft, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { DefaultButton, SecondaryButton } from '~/components/Buttons/styles';
import Input from '~/components/Input';
import {
  ButtonGroup,
  Container,
  FormContainer,
  Header,
  InputWrapper,
} from './styles';

export default function NewRecipient() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de destinatário</h1>
          <ButtonGroup>
            <Link to="/recipients">
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
          <InputWrapper>
            <label htmlFor="name">Nome</label>
            <Input id="name" name="name" placeholder="Ludwig van Beethoven" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Rua</label>
            <Input id="email" name="email" placeholder="Rua Beethoven" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="number">Número</label>
            <Input id="number" name="house_number" placeholder="9999" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="complement">Complemento</label>
            <Input
              id="complement"
              name="complement"
              placeholder="Informações adicionais"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="city">Cidade</label>
            <Input id="city" name="city" placeholder="Franca" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="state">Estado</label>
            <Input id="state" name="state" placeholder="São Paulo" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="zip">CEP</label>
            <Input id="zip" name="zip" placeholder="99999-999" />
          </InputWrapper>
        </FormContainer>
      </Form>
    </Container>
  );
}
