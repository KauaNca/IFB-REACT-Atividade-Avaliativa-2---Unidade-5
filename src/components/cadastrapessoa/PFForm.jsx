import React from 'react';
import { Form, Input, DatePicker, message } from 'antd';
function PFForm() {
  return (
    <>
      {/* <Form.Item
          label="CPF"
          name="cpf"
          rules={[{ required: true, message: "Informe o CPF!" }]}
        >
          <Input placeholder="Somente números" maxLength={11} />
    </Form.Item> */}

      <Form.Item label="Data de Nascimento" name="dataNascimento">
        <DatePicker
          format="DD/MM/YYYY"
          style={{ width: '100%' }}
          placeholder="Selecione data de nascimento"
        />
      </Form.Item>

      <Form.Item
        label="Título de Eleitor - Número"
        name={['titulo', 'numero']}
        rules={[
          { required: true, message: 'Informe o número do título de eleitor' },
          { len: 12, message: 'O título deve conter exatamente 12 dígitos' },
        ]}
      >
        <Input
          placeholder="Número do título (12 dígitos)"
          maxLength={12}
          inputMode="numeric"
          pattern="\d*"
        />
      </Form.Item>

      <Form.Item
        label="Zona Eleitoral"
        name={['titulo', 'zona']}
        rules={[
          { required: true, message: 'Informe a zona eleitoral' },
          { max: 3, message: 'A zona deve ter no máximo 3 dígitos' },
        ]}
      >
        <Input
          placeholder="Zona (até 3 dígitos)"
          maxLength={3}
          inputMode="numeric"
          pattern="\d*"
        />
      </Form.Item>

      <Form.Item
        label="Seção Eleitoral"
        name={['titulo', 'secao']}
        rules={[
          { required: true, message: 'Informe a seção eleitoral' },
          { max: 4, message: 'A seção deve ter no máximo 4 dígitos' },
        ]}
      >
        <Input
          placeholder="Seção (até 4 dígitos)"
          maxLength={4}
          inputMode="numeric"
          pattern="\d*"
        />
      </Form.Item>

    </>
  );
}
export default PFForm;
