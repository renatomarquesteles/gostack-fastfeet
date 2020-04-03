import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import { Container, Badge, ActionsList } from './styles';

export default function Actions({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Badge
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <FiMoreHorizontal size={18} color="#8c8c8c" />
        <ActionsList visible={visible}>{children}</ActionsList>
      </Badge>
    </Container>
  );
}
