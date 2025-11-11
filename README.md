🧮 Atividade Avaliativa 2 - Unidade 5
📅 Tema: Armazenamento e gerenciamento de datas no CRUD de Pessoa Física e Jurídica
🧾 Descrição da Atividade

O objetivo desta atividade é implementar, de forma complementar, os objetos e formulários necessários para que a Data de Nascimento (Pessoa Física) e a Data de Registro (Pessoa Jurídica) sejam corretamente armazenadas e gerenciadas no projeto, utilizando o CRUD local.

Faz parte da avaliação a devida adaptação do código existente para o funcionamento adequado das novas propriedades, respeitando boas práticas de encapsulamento e persistência local.

📌 Data de entrega: 17/11/2025 às 11h
📌 Critério: Após o prazo, a avaliação terá peso de 60% do total

🚀 Solução Proposta

A solução desenvolvida garante o armazenamento e exibição corretos das informações de data nos formulários e nas telas de visualização, mantendo a integração com o sistema de CRUD local.

Foi implementado suporte ao idioma português no componente de calendário (DatePicker do Ant Design), além de ajustes nas classes de domínio e nos arquivos de persistência.

🔧 Mudanças Realizadas
1️⃣ App.jsx

🆕 Adicionadas importações de locale pt_BR e dayjs.

🆕 Aplicação envolvida pelo ConfigProvider do Ant Design com o locale ptBR, garantindo o calendário e textos em português.

2️⃣ Pessoa.mjs

🆕 Incluídas as funções setData(data) e getData() para manipulação encapsulada da data nas classes de pessoa.

3️⃣ PFDAOLocal.jsx e PJDAOLocal.jsx

🆕 Adaptados os métodos de serialização e desserialização (JSON) para incluir as informações de data (dataNascimento e dataRegistro).

🆕 As classes Pessoa Física (PF) e Pessoa Jurídica (PJ), herdando de Pessoa, foram ajustadas para salvar e recuperar corretamente as novas propriedades.

4️⃣ PFForm.jsx e PJForm.jsx

🆕 Alterado o formato dos componentes DatePicker de "YYYY-MM-DD" para "DD-MM-YYYY".

🆕 Adicionadas novas regras de validação para os campos Título de Eleitor (PF) e Inscrição Estadual (PJ).

5️⃣ PessoaFormOOV2.jsx

🆕 Adicionado o método setData() para salvar corretamente a data informada no formulário.

6️⃣ VisualizaPessoaV2.jsx

🆕 Incluído o campo “Data de Nascimento” na visualização da Pessoa Física.


Testes de CRUD realizados com sucesso, incluindo criação, atualização e visualização das datas.