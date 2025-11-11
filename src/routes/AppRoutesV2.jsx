import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout.jsx';
import PessoaForm from '../components/cadastrapessoa/PessoaFormOOV2.jsx';
import ListaPessoas from '../components/listapessoas/ListaPessoasV2.jsx';
import VisualizaPessoa from '../components/visualizapessoa/VisualizaPessoaV2.jsx';

function AppRoutes() {
  return (
    <Routes>
      {/* Todas as rotas dentro do layout principal */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="cadastrar" replace />} />
        {/* Isso significa:
        Quando o usuário entra em / (sem nada após), ele é redirecionado para /cadastrar.
        replace impede que o redirecionamento fique no histórico (não dá “voltar” pra / vazio).*/}
        <Route path="cadastrar" element={<PessoaForm />} />
        <Route path="listar" element={<ListaPessoas />} />
        <Route path="visualizar/:tipo/:id" element={<VisualizaPessoa />} />
        <Route path="editar/:tipo/:id" element={<PessoaForm />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
