import React, { useState } from 'react';

function Label({ texto }) {
  const [valor, setValor] = useState(texto);
  return (
    <>
      <p>{valor}</p>
    </>
  );
}

export default Label;
