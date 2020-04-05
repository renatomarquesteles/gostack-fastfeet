import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import Actions from '~/components/Actions';
import { DefaultButton } from '~/components/Buttons/styles';
import SearchInput from '~/components/Form/SearchInput';
import { Table } from '~/components/Table/styles';
import { Action, Content, Tools } from './styles';

export default function Recipient() {
  return (
    <Content>
      <h1>Gerenciando destinatários</h1>
      <Tools>
        <SearchInput placeholder="Buscar por destinatários" />
        <Link to="/recipients/new">
          <DefaultButton type="button">
            <FiPlus size={22} color="#fff" />
            CADASTRAR
          </DefaultButton>
        </Link>
      </Tools>
      <Table gridTemplateColumns={'0.5fr 2fr 4fr 0.5fr'}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <Actions>
                <Action>
                  <MdModeEdit color="#4d85ee" />
                  Editar
                </Action>
                <Action>
                  <MdDelete color="#de3b3b" />
                  Excluir
                </Action>
              </Actions>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Renato Marques Teles</td>
            <td>Rua Monsenhor Gomes, 1416, São José dos Campos - São Paulo</td>
            <td>
              <Actions>
                <Action>
                  <MdModeEdit color="#4d85ee" />
                  Editar
                </Action>
                <Action>
                  <MdDelete color="#de3b3b" />
                  Excluir
                </Action>
              </Actions>
            </td>
          </tr>
          <tr>
            <td>#03</td>
            <td>Joaquin Ruy Barbosa</td>
            <td>
              Rua Oliveira das Palmeiras, 777, Rio de Janeiro - Rio de Janeiro
            </td>
            <td>
              <Actions>
                <Action>
                  <MdModeEdit color="#4d85ee" />
                  Editar
                </Action>
                <Action>
                  <MdDelete color="#de3b3b" />
                  Excluir
                </Action>
              </Actions>
            </td>
          </tr>
        </tbody>
      </Table>
    </Content>
  );
}
