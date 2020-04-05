import React, { useCallback, useState, useRef, useEffect } from 'react';
import { MdImage } from 'react-icons/md';
import { useField } from '@unform/core';

import { Container, InsertImage } from './styles';

export default function AvatarInput({ name, ...rest }) {
  const ref = useRef();
  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {preview ? (
        <label htmlFor="avatar">
          <img src={preview} alt="Preview" width="150" />
        </label>
      ) : (
        <InsertImage htmlFor="avatar">
          <MdImage size={40} color="#bbb" />
          Adicionar Foto
        </InsertImage>
      )}
      <input
        id="avatar"
        type="file"
        ref={ref}
        onChange={handlePreview}
        {...rest}
      />
    </Container>
  );
}
