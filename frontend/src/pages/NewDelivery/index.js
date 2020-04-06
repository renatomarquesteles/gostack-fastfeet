import React, { useRef } from 'react';
import { FiChevronLeft, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Form } from '@unform/web';

import { DefaultButton, SecondaryButton } from '~/components/Buttons/styles';
import Input from '~/components/Input';
import {
  ButtonGroup,
  Container,
  FormContainer,
  Header,
  SelectGroup,
  SelectWrapper,
} from './styles';

const recipients = [
  { value: '1', label: 'John Doe' },
  { value: '2', label: 'Ludwig van Beethoven' },
  { value: '3', label: 'Wolfgang Amadeus' },
  { value: '4', label: 'Johann Sebastian Bach' },
  { value: '5', label: 'Frédéric Chopin' },
  { value: '6', label: 'Antonio Vivaldi' },
];

const deliverymen = [
  { value: '1', label: 'Gaspar Antunes' },
  { value: '2', label: 'Dai Jiang' },
  { value: '3', label: 'Tom Hanson' },
  { value: '4', label: 'Marc Franklin' },
  { value: '5', label: 'Rosetta Castro' },
  { value: '6', label: 'Piotr Ilitch Tchaikovski' },
];

export default function NewDelivery() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de encomendas</h1>
          <ButtonGroup>
            <Link to="/deliveries">
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
          <SelectGroup>
            <SelectWrapper>
              <label>Destinatário</label>
              <Select options={recipients} name="recipient" />
            </SelectWrapper>
            <SelectWrapper>
              <label>Entregador</label>
              <Select options={deliverymen} name="deliveryman" />
            </SelectWrapper>
          </SelectGroup>
          <Input
            id="product"
            name="product"
            label="Nome do produto"
            placeholder="Digite o nome do produto"
          />
        </FormContainer>
      </Form>
    </Container>
  );
}
