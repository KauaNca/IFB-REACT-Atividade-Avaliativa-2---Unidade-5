import React from 'react';
import Label from './Label.jsx';
import LabelTitle from './LabelTitle.jsx';
import Button from './Button.jsx';
import InputText from './InputText.jsx';
import InputPassword from './InputPassword.jsx';

function LoginPF() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-300">
      <form className="bg-white h-auto p-8 rounded-lg shadow-md w-1/4">
        <LabelTitle texto="Cadastro" />

        <div className="mb-4 flex flex-col">
          <Label texto="Usuário:" />
          <InputText placeholder="Digite seu nome" />
        </div>
        <div className="mb-4 flex flex-col">
          <Label texto="Email:" />
          <InputText placeholder="Ex.: ifb@usuario.com" />
        </div>
        <div className="mb-4 flex flex-col">
          <Label texto="CPF:" />
          <InputText placeholder="Ex.: 000.000.000-00" />
        </div>
        <div className="mb-4 flex flex-col">
          <Label texto="Telefone:" />
          <InputText placeholder="Ex.: 61999999999" />
        </div>
        <div className="mb-4 flex flex-col">
          <Label texto="Endereço:" />
          <InputText placeholder="Ex.: QNP 23 Conjunto A" />
        </div>
        <div className="mb-4 flex flex-col">
          <Label texto="Senha:" />
          <InputPassword placeholder="" />
        </div>
        <Button texto="Cadastrar"/>
      </form>
    </div>
  );
}
export default LoginPF;
