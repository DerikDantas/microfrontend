# Projeto de Estudo sobre Microfrontends

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/DerikDantas/microfrontend/blob/master/README.md)

<hr />

Este é um projeto de estudo sobre Microfrontends, desenvolvido com o objetivo de explorar e compreender os conceitos associados a esta arquitetura. Microfrontend é uma abordagem arquitetônica que possibilita a divisão de uma aplicação monolítica em partes menores, independentes e autônomas, proporcionando benefícios como escalabilidade, manutenção facilitada e desenvolvimento paralelo.

## Visão Geral
O projeto consiste em uma aplicação web dividida em módulos independentes, cada um representando uma funcionalidade específica. Cada módulo é um Microfrontend, desenvolvido e mantido separadamente, permitindo que a equipe trabalhe de forma isolada em suas respectivas áreas sem afetar outras partes do sistema.

**[Live Demo](https://microfrontend-bice.vercel.app/)**

## 🚀 Tecnologias Utilizadas

- **Vite:** Utilizado com o plugin **vite-plugin-federation** para controle de Microfrontends.
- **Tailwind CSS:** Utilizado para estilizar a aplicação.
- **TypeScript:** Implementado para tipagem forte e uma experiência de desenvolvimento aprimorada.
- **React:** Empregado para a construção de componentes modulares e reutilizáveis.

## 📂 Estrutura do Projeto

O projeto possui uma estrutura intuitiva, com os principais diretórios sendo:

- **`/host`:** O Microfrontend "host" é o componente principal desenvolvido em React. Ele contém o componente Home (que inclui a ProductList, Navbar e AppRoutes).
- **`/order-app`:** Componente secundário desenvolvido em React. Ele abriga os componentes Checkout e Orders.
- **`/product-app`:** Outro componente secundário desenvolvido em React. Ele contém o componente ProductDetails.

## 🔧 Iniciando

1. **Instalar Dependências:** Execute `pnpm install` para instalar as dependências do projeto.
2. **Iniciar Servidor do Microfrontend host:** Execute `pnpm run dev:hosts` para iniciar o servidor do host.
3. **Construir Remotos:** Execute `pnpm run build:remotes` para construir os Microfrontends remotos.
4. **Iniciar Servidores dos Microfrontends remotos:** Execute `pnpm run serve:remotes`
   - order-app: [http://localhost:5001](http://localhost:5001)
   - product-app: [http://localhost:5002](http://localhost:5002)

Visite [http://localhost:5000](http://localhost:5000) para visualizar o projeto no seu navegador.

## 📝 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
