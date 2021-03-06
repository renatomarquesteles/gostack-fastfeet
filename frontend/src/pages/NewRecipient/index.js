import React, { useRef } from 'react';
import { FiChevronLeft, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { DefaultButton, SecondaryButton } from '~/components/Buttons/styles';
import Input from '~/components/Input';
import {
  ButtonGroup,
  Container,
  FlexContainer,
  FormContainer,
  Header,
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
          <Input
            id="name"
            name="name"
            label="Nome"
            placeholder="Ludwig van Beethoven"
          />
          <FlexContainer>
            <Input
              id="rua"
              name="rua"
              label="Rua"
              placeholder="Rua Beethoven"
            />
            <FlexContainer>
              <Input
                id="number"
                name="house_number"
                label="Número"
                mask="9999"
                placeholder="9999"
              />
              <Input
                id="complement"
                name="complement"
                label="Complemento"
                placeholder="Informações adicionais"
              />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer>
            <Input id="city" name="city" label="Cidade" placeholder="Franca" />
            <Input
              id="state"
              name="state"
              label="Estado"
              placeholder="São Paulo"
            />
            <Input
              id="zip"
              name="zip"
              label="CEP"
              mask="99999-999"
              maskPlaceholder="_"
              placeholder="99999-999"
            />
          </FlexContainer>
        </FormContainer>
      </Form>
    </Container>
  );
}
