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