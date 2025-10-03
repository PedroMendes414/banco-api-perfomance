# Banco API - Testes de Performance com k6

## 📌 Introdução  
Este repositório contém os testes de **performance** da **Banco API**, desenvolvidos com a ferramenta [k6](https://k6.io/).  
O objetivo é avaliar a disponibilidade, carga e comportamento da API em cenários reais de uso, garantindo maior confiabilidade e escalabilidade do sistema.  

Repositório: [Banco API Performance Tests](https://github.com/PedroMendes414/banco-api-perfomance)  

---

## ⚙️ Tecnologias utilizadas  
- [k6](https://k6.io/) – ferramenta escrita em Go para testes de performance.  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) – usado para escrever os cenários de teste.  
- JSON – arquivos de configuração e payloads.  

---

## 📂 Estrutura do repositório  

```
banco-api-perfomance/
│
├── config/               # Arquivos de configuração (ex.: parâmetros da API)
│   └── config.local.json
│
├── fixtures/             # Arquivos estáticos para requisições
│   ├── postLogin.json
│   └── postTransferencias.json
│
├── helpers/              # Funções auxiliares (ex.: autenticação)
│   └── autenticacao.js
│
├── tests/                # Testes implementados em k6
│   ├── login.test.js
│   └── transferencias.test.js
│
├── utils/                # Funções utilitárias (variáveis globais, etc.)
│   └── variaveis.js
│
└── .gitignore
```

---

## 🎯 Objetivo de cada grupo de arquivos  

- **`config/`** – contém arquivos de configuração centralizada (URLs, parâmetros).  
- **`fixtures/`** – guarda payloads estáticos usados nos testes (ex.: login, transferências).  
- **`helpers/`** – funções auxiliares, como autenticação e manipulação de tokens.  
- **`tests/`** – os cenários de teste escritos em JS para execução no k6.  
- **`utils/`** – arquivos de apoio com variáveis ou funções globais.  

---

## 🚀 Instalação  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/PedroMendes414/banco-api-perfomance.git
   cd banco-api-perfomance
   ```

2. Verifique se o **k6** está instalado:  
   ```bash
   k6 version
   ```
   Caso não tenha, siga a [documentação oficial](https://k6.io/docs/getting-started/installation/).  

---

## ▶️ Execução dos testes  

### 1. Definir a `BASE_URL`  
A URL base da API deve ser informada como variável de ambiente no momento da execução.  
O valor padrão usado no projeto está em `config/config.local.json`:  

```json
{
  "BASE_URL": "http://localhost:3000"
}
```

Linux / Mac:  
```bash
BASE_URL=http://localhost:3000 k6 run tests/login.test.js
```

Windows (PowerShell):  
```powershell
$env:BASE_URL="http://localhost:3000"; k6 run tests/login.test.js
```

### 2. Executar os testes diretamente  
Login:  
```bash
BASE_URL=http://localhost:3000 k6 run tests/login.test.js
```

Transferências:  
```bash
BASE_URL=http://localhost:3000 k6 run tests/transferencias.test.js
```

### 3. Acompanhar resultados em tempo real  
```bash
BASE_URL=http://localhost:3000 K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

### 4. Exportar relatório em HTML  
```bash
BASE_URL=http://localhost:3000 K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/transferencias.test.js
```

O arquivo `html-report.html` será gerado na raiz do projeto e pode ser aberto em qualquer navegador.  

---

📊 Com isso, é possível acompanhar a performance da **Banco API** tanto em tempo real quanto por relatórios exportados.  
