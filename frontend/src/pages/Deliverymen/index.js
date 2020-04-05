import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import Actions from '~/components/Actions';
import { DefaultButton } from '~/components/Buttons/styles';
import SearchInput from '~/components/Form/SearchInput';
import { Table } from '~/components/Table/styles';
import { Action, Avatar, Content, Tools } from './styles';

export default function Deliverymen() {
  return (
    <Content>
      <h1>Gerenciando entregadores</h1>
      <Tools>
        <SearchInput placeholder="Buscar por entregadores" />
        <Link to="/deliverymen/new">
          <DefaultButton type="button">
            <FiPlus size={22} color="#fff" />
            CADASTRAR
          </DefaultButton>
        </Link>
      </Tools>
      <Table gridTemplateColumns={'0.5fr 0.5fr 2fr 2fr 0.5fr'}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <Avatar
                src="https://api.adorable.io/avatars/40/deliveryman.png"
                alt="Avatar"
              />
            </td>
            <td>Ludwig van Beethoven</td>
            <td>ludwigvanbeethoven@email.com</td>
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
            <td>#01</td>
            <td>
              <Avatar
                src="https://api.adorable.io/avatars/40/deliveryman.png"
                alt="Avatar"
              />
            </td>
            <td>Ludwig van Beethoven</td>
            <td>ludwigvanbeethoven@email.com</td>
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
            <td>#01</td>
            <td>
              <Avatar
                src="https://api.adorable.io/avatars/40/deliveryman.png"
                alt="Avatar"
              />
            </td>
            <td>Ludwig van Beethoven</td>
            <td>ludwigvanbeethoven@email.com</td>
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
