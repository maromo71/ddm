# Projeto Calculadora 
## Preparação para aula do Prof. Maromo

### Instruções para o desenvolvimento

A seguir está o projeto completo da **Calculadora Básica**, estruturado exatamente com os padrões e conhecimentos apresentados até a aula (Vite, componentes funcionais, `useState`, eventos `onClick`, estilização e rotas com `react-router-dom`).

---

### 1. Criação do Projeto e Instalação de Dependências

No terminal, execute:

```bash
# 1. Criação do projeto React com Vite
npm create vite@latest app-calculadora -- --template react

# 2. Acessar o diretório
cd app-calculadora

# 3. Instalar dependências básicas
npm install

# 4. Instalar a biblioteca de rotas
npm install react-router-dom

```

---

### 2. Estrutura de Diretórios e Arquivos

Organize a pasta `src` da seguinte forma:

```text
src/
├── components/
│   └── BackButton/
│       ├── index.jsx
│       └── style.css
├── pages/
│   ├── HomePage/
│   │   ├── index.jsx
│   │   └── style.css
│   ├── CalculatorPage/
│   │   ├── index.jsx
│   │   └── style.css
│   └── AboutPage/
│       ├── index.jsx
│       └── style.css
├── routes/
│   └── index.jsx
├── App.css
├── App.jsx
└── main.jsx

```

---

### 3. Implementação dos Códigos

#### `src/components/BackButton/index.jsx`

Componente reutilizável para retorno à página inicial:

```jsx
import { Link } from 'react-router-dom';
import './style.css';

export default function BackButton() {
  return (
    <Link to="/" className="btn-voltar">
      Voltar para Início
    </Link>
  );
}

```

#### `src/components/BackButton/style.css`

```css
.btn-voltar {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 18px;
  background-color: #555;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: background-color 0.2s;
}

.btn-voltar:hover {
  background-color: #333;
}

```

---

#### `src/routes/index.jsx`

Configuração centralizada das rotas da SPA:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CalculatorPage from '../pages/CalculatorPage';
import AboutPage from '../pages/AboutPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculadora" element={<CalculatorPage />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

```

---

#### `src/pages/HomePage/index.jsx`

Tela inicial com navegação para a calculadora e para a tela sobre:

```jsx
import { Link } from 'react-router-dom';
import './style.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Calculadora React</h1>
      <p>Selecione uma opção abaixo para navegar na aplicação:</p>

      <div className="home-links">
        <Link to="/calculadora" className="btn-menu">
          Acessar Calculadora
        </Link>
        <Link to="/sobre" className="btn-menu secundario">
          Sobre o Projeto
        </Link>
      </div>
    </div>
  );
}

```

#### `src/pages/HomePage/style.css`

```css
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}

.home-links {
  display: flex;
  gap: 16px;
  margin-top: 25px;
}

.btn-menu {
  padding: 12px 24px;
  background-color: #0066cc;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.btn-menu:hover {
  background-color: #004c99;
}

.btn-menu.secundario {
  background-color: #2e7d32;
}

.btn-menu.secundario:hover {
  background-color: #1b5e20;
}

```

---

#### `src/pages/CalculatorPage/index.jsx`

Implementação da lógica da calculadora utilizando `useState` e `onClick`:

```jsx
import { useState } from 'react';
import BackButton from '../../components/BackButton';
import './style.css';

export default function CalculatorPage() {
  // Estados para display, valores e operador
  const [display, setDisplay] = useState('0');
  const [primeiroNumero, setPrimeiroNumero] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [limparAoDigitar, setLimparAoDigitar] = useState(false);

  // Inserção de dígitos
  const handleNumero = (numero) => {
    if (display === '0' || limparAoDigitar) {
      setDisplay(String(numero));
      setLimparAoDigitar(false);
    } else {
      setDisplay(display + numero);
    }
  };

  // Seleção de operador (+, -, *, /)
  const handleOperacao = (op) => {
    setPrimeiroNumero(parseFloat(display));
    setOperacao(op);
    setLimparAoDigitar(true);
  };

  // Execução do cálculo
  const handleCalcular = () => {
    if (primeiroNumero === null || operacao === null) return;

    const segundoNumero = parseFloat(display);
    let resultado = 0;

    switch (operacao) {
      case '+':
        resultado = primeiroNumero + segundoNumero;
        break;
      case '-':
        resultado = primeiroNumero - segundoNumero;
        break;
      case '*':
        resultado = primeiroNumero * segundoNumero;
        break;
      case '/':
        resultado = segundoNumero !== 0 ? primeiroNumero / segundoNumero : 'Erro';
        break;
      default:
        return;
    }

    setDisplay(String(resultado));
    setPrimeiroNumero(null);
    setOperacao(null);
    setLimparAoDigitar(true);
  };

  // Limpeza de estado
  const handleLimpar = () => {
    setDisplay('0');
    setPrimeiroNumero(null);
    setOperacao(null);
    setLimparAoDigitar(false);
  };

  return (
    <div className="calc-page-container">
      <h2>Calculadora Básica</h2>

      <div className="calculadora">
        <div className="display">{display}</div>

        <div className="teclado">
          <button className="btn-op" onClick={() => handleOperacao('+')}>+</button>
          <button className="btn-op" onClick={() => handleOperacao('-')}>-</button>
          <button className="btn-op" onClick={() => handleOperacao('*')}>*</button>
          <button className="btn-op" onClick={() => handleOperacao('/')}>/</button>

          <button onClick={() => handleNumero(7)}>7</button>
          <button onClick={() => handleNumero(8)}>8</button>
          <button onClick={() => handleNumero(9)}>9</button>
          <button className="btn-limpar" onClick={handleLimpar}>C</button>

          <button onClick={() => handleNumero(4)}>4</button>
          <button onClick={() => handleNumero(5)}>5</button>
          <button onClick={() => handleNumero(6)}>6</button>
          <button className="btn-igual" onClick={handleCalcular}>=</button>

          <button onClick={() => handleNumero(1)}>1</button>
          <button onClick={() => handleNumero(2)}>2</button>
          <button onClick={() => handleNumero(3)}>3</button>
          <button onClick={() => handleNumero(0)} className="btn-zero">0</button>
        </div>
      </div>

      <BackButton />
    </div>
  );
}

```

#### `src/pages/CalculatorPage/style.css`

```css
.calc-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.calculadora {
  background-color: #222;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  width: 260px;
  margin-top: 15px;
}

.display {
  background-color: #111;
  color: #0f0;
  font-family: monospace;
  font-size: 2rem;
  text-align: right;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  min-height: 38px;
}

.teclado {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.teclado button {
  height: 48px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  background-color: #3d3d3d;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.15s;
}

.teclado button:hover {
  opacity: 0.8;
}

.teclado button.btn-op {
  background-color: #ff9800;
  color: #fff;
}

.teclado button.btn-limpar {
  background-color: #e53935;
  color: #fff;
}

.teclado button.btn-igual {
  background-color: #4caf50;
  color: #fff;
  grid-row: span 2;
  height: 106px;
}

.teclado button.btn-zero {
  grid-column: span 1;
}

```

---

#### `src/pages/AboutPage/index.jsx`

Tela informativa sobre as tecnologias utilizadas:

```jsx
import BackButton from '../../components/BackButton';
import './style.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <h2>Sobre o Projeto</h2>
      <p>Aplicação SPA desenvolvida com React JS demonstrando:</p>
      
      <ul className="about-list">
        <li><strong>Hook useState:</strong> Gerenciamento do estado da calculadora e operadores.</li>
        <li><strong>Evento onClick:</strong> Captura dos cliques nos botões numéricos e de ação.</li>
        <li><strong>react-router-dom:</strong> Roteamento no client-side com <code>BrowserRouter</code>, <code>Routes</code> e <code>Route</code>.</li>
        <li><strong>Reutilização de Componentes:</strong> Uso transversal do componente <code>BackButton</code>.</li>
      </ul>

      <BackButton />
    </div>
  );
}

```

#### `src/pages/AboutPage/style.css`

```css
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}

.about-list {
  margin: 20px 0;
  line-height: 1.8;
}

```

---

#### `src/App.jsx`

Ponto de entrada que carrega as rotas:

```jsx
import AppRoutes from './routes';
import './App.css';

export default function App() {
  return (
    <div className="app-main">
      <AppRoutes />
    </div>
  );
}

```

#### `src/App.css`

```css
.app-main {
  font-family: Arial, sans-serif;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f6f8;
}

```

#### `src/main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

---

### 4. Executando o Projeto

No terminal do projeto:

```bash
npm run dev

```

Abra o endereço indicado pelo Vite (geralmente `http://localhost:5173`) no navegador.