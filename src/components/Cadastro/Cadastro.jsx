import '../CSS/Login.css';

import Label from '../CSS/Label.jsx';
import LabelTitle from '../CSS/LabelTitle.jsx';
import Button from '../CSS/Button.jsx';
import InputText from '../CSS/InputText.jsx';
import InputPassword from '../CSS/InputPassword.jsx';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <LabelTitle texto="Cadastro" />

        <div className="form-group">
          <Label texto="Email:" />
          <InputText placeholder="Digite seu nome" />
        </div>
        <div className="form-group">
          <Label texto="CPF" />
          <InputText placeholder="CPF" />
        </div>
        <div className="form-group">
          <Label texto="Senha:" />
          <InputPassword placeholder="Senha" />
        </div>

        <Button valor="Cadastrar" />
      </form>
    </div>
  );
}

export default Login;
