import React from 'react';
import { FiMoreHorizontal, FiPlus } from 'react-icons/fi';

import { DefaultButton } from '~/components/Buttons/styles';
import SearchInput from '~/components/Form/SearchInput';
import api from '~/services/api';
import { Table } from '~/components/Table/styles';
import { Avatar, Content, Status, Tools } from './styles';

export default function Deliveries() {
  api.get('/deliveries');

  return (
    <Content>
      <h1>Gerenciando encomendas</h1>
      <Tools>
        <SearchInput placeholder="Buscar por encomendas" />
        <DefaultButton type="button">
          <FiPlus size={24} color="#fff" />
          CADASTRAR
        </DefaultButton>
      </Tools>
      <Table gridTemplateColumns={'0.5fr 2fr 2fr 1fr 1fr 1fr 0.5fr'}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <Avatar
                src="https://api.adorable.io/avatars/40/deliveryman.png"
                alt="Avatar"
              />
              John Doe
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status="canceled">
                <span />
                Cancelado
              </Status>
            </td>
            <td>
              <FiMoreHorizontal size={18} color="#8c8c8c" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <Avatar
                src="https://api.adorable.io/avatars/40/deliveryman2.png"
                alt="Avatar"
              />
              John Doe
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status="delivered">
                <span />
                Entregue
              </Status>
            </td>
            <td>
              <FiMoreHorizontal size={18} color="#8c8c8c" />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <Avatar
                src="https://api.adorable.io/avatars/40/deliveryman3.png"
                alt="Avatar"
              />
              John Doe
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status="pending">
                <span />
                Pendente
              </Status>
            </td>
            <td>
              <FiMoreHorizontal size={18} color="#8c8c8c" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Content>
  );
}
