import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

export default function SearchInput({ ...rest }) {
  return (
    <Container>
      <FiSearch color="#999" size={16} />
      <input {...rest} />
    </Container>
  );
}
