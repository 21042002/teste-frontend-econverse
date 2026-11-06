# 🛒 Econverse - E-commerce Frontend Challenge

Este projeto é uma aplicação e-commerce responsiva desenvolvida como solução para o teste prático da **Econverse**. A interface foi construída em **React**, **TypeScript**, **Vite** e estilizada utilizando **Less**, seguindo estritamente a fidelidade visual e funcional apresentada no protótipo do Figma.

---

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca principal para construção da interface de usuário.
- **TypeScript** - Tipagem estática para maior segurança e autocompletion no desenvolvimento.
- **Vite** - Bundler e ambiente de desenvolvimento ultrarrápido.
- **Less** - Pré-processador CSS para organização de estilos com variáveis e aninhamento.
- **Fetch API (Local Mock)** - Consumo de dados assíncronos simulados via `public/mock-produtos.json`.

---

## 📁 Estrutura do Projeto

```text
├── public/                # Assets estáticos e mock JSON
├── src/
│   ├── components/        # Componentes modulares (Header, Banner, Vitrines, Modal, etc.)
│   ├── services/          # Consumo de dados (productService)
│   ├── styles/            # Estilos globais e variáveis em Less
│   ├── types/             # Interfaces e tipagens TypeScript
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Ponto de entrada da aplicação
├── index.html
├── package.json
└── vite.config.ts