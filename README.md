# ⚽ Copa 2026 Explorer

Aplicação web desenvolvida em Node.js para explorar informações sobre a Copa do Mundo FIFA 2026.

O projeto foi criado como atividade prática da disciplina de DevOps, aplicando conceitos de Git Flow, Integração Contínua (CI), Entrega Contínua (CD), testes automatizados e deploy em ambiente AWS EC2.

---

## 🚀 Funcionalidades

- Página inicial responsiva
- Página de seleções participantes
- Countdown para a final da Copa do Mundo 2026
- Navegação entre páginas
- Interface responsiva para desktop e dispositivos móveis

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- Git e GitHub
- GitHub Actions
- Jest
- Selenium WebDriver
- ESLint
- AWS EC2
- PM2

---

## 📂 Estrutura do Projeto

```text
copa-2026-explorer/
├── .github/
│   └── workflows/
├── src/
│   ├── app.js
│   └── views/
├── tests/
├── package.json
└── README.md
```

---

## 🔀 Fluxo de Branches

O projeto utiliza uma estratégia baseada em Git Flow:

```text
main
│
develop
│
├── feature/home
├── feature/testes
├── feature/selenium
├── feature/ci
├── feature/cd
└── feature/readme
```

---

## ✅ Integração Contínua (CI)

O workflow de CI executa automaticamente:

- Análise estática com ESLint
- Testes unitários com Jest
- Geração de cobertura de testes

---

## 🚚 Continuous Deployment (CD)

O workflow de CD realiza automaticamente:

- Deploy para instância AWS EC2
- Atualização dos arquivos da aplicação
- Disponibilização da versão mais recente do sistema

---

## 🧪 Testes

### Executar testes unitários

```bash
npm test
```

### Executar teste Selenium

```bash
npm run test:selenium
```

### Executar análise estática

```bash
npm run lint
```

---

## ▶️ Executando localmente

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

## ☁️ Deploy

A aplicação é implantada automaticamente em uma instância AWS EC2 através do GitHub Actions.

---

## 👨‍💻 Desenvolvedor

Projeto desenvolvido para a disciplina de DevOps.

- Davi Martinelli Landal

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais.
