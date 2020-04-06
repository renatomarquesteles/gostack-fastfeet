import React, { useState } from 'react';
import { MdDelete, MdRemoveRedEye } from 'react-icons/md';

import Actions from '~/components/Actions';
import Modal from '~/components/Modal';
import { Table } from '~/components/Table/styles';
import { Action, Content, ResponsiveTd, ModalInfo } from './styles';

export default function Problems() {
  const [modalIsOpen, setModalOpen] = useState(false);

  return (
    <Content>
      <h1>Problemas na entrega</h1>
      <Table gridTemplateColumns={'0.5fr 5fr 0.5fr'}>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <ResponsiveTd>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
            </ResponsiveTd>
            <td>
              <Actions width="175">
                <Action>
                  <MdRemoveRedEye color="#8e5be8" />
                  Visualizar
                </Action>
                <Action>
                  <MdDelete color="#de3b3b" />
                  Cancelar encomenda
                </Action>
              </Actions>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <ResponsiveTd>
              <span>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </span>
            </ResponsiveTd>
            <td>
              <Actions width="175">
                <Action>
                  <MdRemoveRedEye color="#8e5be8" />
                  Visualizar
                </Action>
                <Action>
                  <MdDelete color="#de3b3b" />
                  Cancelar encomenda
                </Action>
              </Actions>
            </td>
          </tr>
          <tr>
            <td>#03</td>
            <ResponsiveTd>
              <span>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </span>
            </ResponsiveTd>
            <td>
              <Actions width="175">
                <Action>
                  <MdRemoveRedEye color="#8e5be8" />
                  Visualizar
                </Action>
                <Action>
                  <MdDelete color="#de3b3b" />
                  Cancelar encomenda
                </Action>
              </Actions>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalOpen(false)}
        modalWidth={450}
        modalHeight={400}
      >
        <ModalInfo>
          <h3>Visualizar problema</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </ModalInfo>
      </Modal>
    </Content>
  );
}
