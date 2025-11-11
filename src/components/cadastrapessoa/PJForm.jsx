import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';

export default function PJForm() {
  const estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  return (
    <>
      <h3 style={{ marginTop: 20 }}>Dados da Inscrição Estadual (IE)</h3>

      <Form.Item
        label="Inscrição Estadual (IE)"
        name={['ie', 'numero']}
        rules={[
          {
            pattern: /^[0-9]{9,14}$/,
            message: 'A IE deve conter apenas números (entre 9 e 14 dígitos)',
          },
        ]}
      >
        <Input
          placeholder="Informe o número da IE"
          maxLength={14}
          inputMode="numeric"
          pattern="\d*"
        />
      </Form.Item>


      <Form.Item label="Estado da IE" name={['ie', 'estado']}>
        <Select
          placeholder="Selecione o estado"
          allowClear
          options={estados.map((uf) => ({ label: uf, value: uf }))}
        />
      </Form.Item>

      <Form.Item label="Data de Registro da IE" name={['ie', 'dataRegistro']}>
        <DatePicker
          style={{ width: '100%' }}
          format="DD/MM/YYYY"
          allowClear
          placeholder="Selecione a data de registro"
        />
      </Form.Item>
    </>
  );
}
