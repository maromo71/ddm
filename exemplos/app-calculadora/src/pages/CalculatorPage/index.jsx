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