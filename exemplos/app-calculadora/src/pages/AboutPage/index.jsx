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