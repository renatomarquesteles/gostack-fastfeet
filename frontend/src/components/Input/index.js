import React, { useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';
import { useField } from '@unform/core';

import { ErrorMessage, InputContainer } from './styles';

export default function Input({
  name,
  label,
  mask,
  maskPlaceholder = null,
  ...rest
}) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer error={error}>
      <label htmlFor={name}>{label}</label>
      {mask ? (
        <InputMask
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          id={name}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <input id={name} ref={inputRef} defaultValue={defaultValue} {...rest} />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
}
