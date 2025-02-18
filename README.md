# pontoDeControleCy
Este repositório contém testes automatizados utilizando Cypress para validar o funcionamento do sistema Ponto de Controle.

📌 Sobre o Sistema

O Ponto de Controle é um software voltado para o setor agrícola, com foco em:

* Gerenciamento de pesagens.

* Controle de portarias.

* Criação e validação de cadastros.

* Geração de relatórios.

🚀 Tecnologias Utilizadas

Cypress → Framework para testes end-to-end.

JavaScript/TypeScript → Linguagem de programação para os testes.

Node.js & NPM → Gerenciamento de pacotes e execução de scripts.

📂 Estrutura do Repositório

/pontoDeControleCy
│── cypress/
│   ├── e2e/           # Testes organizados por funcionalidade
│   ├── fixtures/      # Dados mockados para testes
│   ├── support/       # Comandos customizados e configurações
│── cypress.config.ts  # Configuração do Cypress
│── package.json       # Dependências do projeto
│── README.md          # Documentação do repositório

▶️ Como Executar os Testes

Clone o repositório:

git clone https://github.com/devVargas/pontoDeControleCy.git
cd pontoDeControleCy

Instale as dependências:

npm install

Para abrir a interface do Cypress:

npx cypress open

Para rodar os testes em modo headless:

npx cypress run
