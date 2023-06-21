# Projeto Digital Checkout System

## Descrição

O projeto "Digital Checkout System" visa desenvolver o frontend de um sistema de checkout para um serviço de assinaturas. Os usuários podem escolher entre uma assinatura anual ou mensal e, ao submeter o formulário, as informações de pagamento serão enviadas para processamento pelo backend. Esperamos retornos de sucesso ou erro com base na validação e processamento do backend. Este projeto foi criado para oferecer uma experiência de checkout simplificada e eficiente.

## Guia de Instalação

Para instalar e rodar este projeto localmente, siga estes passos:

1. Clone o repositório na sua máquina local.

   ```bash
   git clone https://github.com/seu-usuario/digital-checkout-system.git
   ```

2. Navegue até o diretório do projeto.

   ```bash
   cd digital-checkout-system
   ```

3. Instale as dependências do projeto.

   ```bash
   yarn install
   # ou
   npm install
   ```

4. Inicie o servidor de desenvolvimento.

   ```bash
   yarn dev
   # ou
   npm run dev
   ```

O projeto agora deve estar rodando em `http://localhost:3000`.

## Ferramentas

As seguintes ferramentas são usadas neste projeto:

- [Next.js](https://nextjs.org/): um framework React para desenvolvimento web, escolhido pela sua eficiência, SEO-friendly e versatilidade.
- [TypeScript](https://www.typescriptlang.org/): uma extensão tipada do JavaScript, traz segurança e facilidade para a manutenção do código.
- [Styled-Components](https://styled-components.com/): permite escrever CSS em JS, proporcionando dinamismo na estilização. Escolhemos esta biblioteca ao invés do Tailwind para ter mais controle sobre o estilo dos componentes e evitar a inclusão desnecessária de classes CSS.
- [Jest](https://jestjs.io/): uma biblioteca de teste JavaScript robusta e fácil de configurar.
- [ESLint](https://eslint.org/): ferramenta para identificar e reportar padrões encontrados no código ECMAScript/JavaScript, mantendo a qualidade e a legibilidade do código.
- [Prettier](https://prettier.io/): uma ferramenta para formatar automaticamente o código, garantindo consistência de código.
- [Cypress](https://www.cypress.io/): uma ferramenta de teste de ponta a ponta para web, proporcionando testes confiáveis e robustos.
