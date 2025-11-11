import React, { useState } from 'react';

export default function Button({ handleClick, texto, personalizacao }) {
  return (
    <button
      onClick={handleClick}
      className={
        'w-40 px-4 py-5 bg-blue-600 text-white text-base rounded-md cursor-pointer hover:bg-blue-800 transition-color m-2 ' +
        personalizacao
      }
    >
      {texto}
    </button>
  );
}
