import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Content, Tools } from './styles';
import { DefaultButton } from '~/components/Buttons/styles';
import SearchInput from '~/components/Form/SearchInput';

export default function Deliveries() {
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
        <tr>
          <th>ID</th>
          <th>Destinatário</th>
          <th>Entregador</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th>Ações</th>
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
        <tr>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <td>John Doe</td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td>Entregue</td>
          <td>...</td>
        </tr>
      </table>
    </Content>
  );
}
