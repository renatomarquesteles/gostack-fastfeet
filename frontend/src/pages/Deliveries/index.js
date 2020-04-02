import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Content, Tools } from './styles';
import { DefaultButton } from '~/components/Buttons/styles';
import SearchInput from '~/components/Form/SearchInput';
import api from '~/services/api';

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
      <table>
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
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </Content>
  );
}
