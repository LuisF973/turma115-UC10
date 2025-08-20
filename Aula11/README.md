# Projeto Vite + React + Cypress

Este guia apresenta o passo a passo para criar um projeto React com Vite, instalar o Cypress e configurar testes end-to-end (E2E).

## 1. Criando o projeto com Vite e React

1. Instale o Vite (caso não tenha o Node.js instalado, instale primeiro):
   ```powershell
   npm create vite@latest nome-do-projeto 
   ```
    Escolha a opção `React` quando solicitado e `JavaScript` como linguagem.


2. Acesse a pasta do projeto:
   ```powershell
   cd nome-do-projeto
   ```

3. Instale as dependências:
   ```powershell
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```powershell
   npm run dev
   ```

## 2. Instalando o Cypress

1. Instale o Cypress como dependência de desenvolvimento:
   ```powershell
   npm install cypress --save-dev
   ```

2. Abra o Cypress pela primeira vez:
   ```powershell
   npx cypress open
   ```
   Isso criará a pasta `cypress/` com exemplos de testes.

## 3. Estrutura dos testes E2E

- Os testes E2E ficam na pasta `cypress/e2e/`.
- Crie um novo arquivo de teste, por exemplo, `cadastro.cy.js`:
  ```javascript
  // filepath: cypress/e2e/cadastro.cy.js
  describe('Fluxo de cadastro', () => {
    it('Deve acessar a página de cadastro e preencher o formulário', () => {
      cy.visit('http://localhost:5173/cadastro');
      cy.get('input[name="nome"]').type('João');
      cy.get('input[name="email"]').type('joao@email.com');
      cy.get('button[type="submit"]').click();
      cy.contains('Cadastro realizado com sucesso');
    });
  });
  ```

## 4. Executando os testes

- Para rodar os testes em modo interativo:
  ```powershell
  npx cypress open
  ```
- Para rodar os testes em modo headless (terminal):
  ```powershell
  npx cypress run
  ```

## 5. Dicas

- Mantenha os componentes e páginas organizados na pasta `src/`.
- Utilize o arquivo `cypress/support/commands.js` para criar comandos customizados.
- Consulte a [documentação oficial do Cypress](https://docs.cypress.io/) para mais exemplos.

---

