import './App.css';
// import BasicTextFields from './components/form/Input.jsx';
// import Login from './components/Login.jsx';
// import Cadastro from './components/Cadastro/Cadastro.jsx';
// import DenseTable from './components/DenseTable.jsx';
// import BasicDemo from './components/CSS/Calendar.jsx';
import LoginPF from './components/tailwind/LoginPF.jsx';
import LoginPJ from './components/tailwind/LoginPJ.jsx';
import Button from './components/tailwind/Button.jsx';
import { useState } from 'react';

function Desafio() {
  const [formulario, setFormulario] = useState(true);

  function handleClick() {
    setFormulario(!formulario);
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center bg-gray-300">
        <Button
          texto={formulario ? "Pessoa Física" : "Pessoa Jurídica"}
          handleClick={handleClick}
        />
      </div>
      {formulario && <LoginPF />}
      {!formulario && <LoginPJ />}
    </div>
  );
}

export default Desafio;
