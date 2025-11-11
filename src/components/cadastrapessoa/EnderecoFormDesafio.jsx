import React, { useState, useEffect } from 'react';
import { Form, Input, Row, Col, Select } from 'antd';

const { Option } = Select;

function EnderecoForm({ form }) {
  const [cep, setCEP] = useState('');

  useEffect(() => {
    if (cep.length === 8) {
      buscarCEP(cep);
    }
  }, [cep]);
  async function buscarCEP(cep) {
    if (cep.length === 8 && cep) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await fetch(url);
      if (!response.ok) {
        alert('Erro ao buscar cep. Tente novamente');
        return;
      }
      const dados = await response.json();
      if (dados.erro) {
        alert('Erro ao buscar cep. Tente novamente');
        return;
      }
      setCEP(cep);
      // Devido a peculiaridade do Form, é necessário a variável form para sincronizar
      form.setFieldsValue({
        endereco: {
          logradouro: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          uf: dados.uf,
          regiao: dados.regiao,
        },
      });
    } else if (cep.length != 8 || typeof cep != 'number') {
      alert('Por gentileza, informe um CEP válido');
      return;
    }
  }
  return (
    <>
      <Form.Item
        label="CEP"
        name={['endereco', 'cep']}
        rules={[{ required: true, message: 'Informe o CEP!' }]}
      >
        <Input
          type="number"
          placeholder="00000000"
          id="input-cep"
          maxLength={8}
          onChange={(e) => setCEP(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Logradouro"
        name={['endereco', 'logradouro']}
        rules={[{ required: true, message: 'Informe o logradouro!' }]}
      >
        <Input placeholder="Rua / Avenida" />
      </Form.Item>

      <Form.Item
        label="Bairro"
        name={['endereco', 'bairro']}
        rules={[{ required: true, message: 'Informe o bairro!' }]}
      >
        <Input placeholder="Bairro" />
      </Form.Item>

      <Row gutter={8}>
        <Col span={13}>
          <Form.Item
            label="Cidade"
            name={['endereco', 'cidade']}
            rules={[{ required: true, message: 'Informe a cidade!' }]}
          >
            <Input placeholder="Cidade" />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item
            label="UF"
            name={['endereco', 'uf']}
            rules={[{ required: true, message: 'Informe a UF!' }]}
          >
            <Input placeholder="UF" maxLength={2} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Região"
            name={['endereco', 'regiao']}
            rules={[{ required: true, message: 'Selecione a região!' }]}
          >
            <Select placeholder="Selecione">
              <Option value="Norte">Norte</Option>
              <Option value="Nordeste">Nordeste</Option>
              <Option value="Centro-Oeste">Centro-Oeste</Option>
              <Option value="Sudeste">Sudeste</Option>
              <Option value="Sul">Sul</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default EnderecoForm;
