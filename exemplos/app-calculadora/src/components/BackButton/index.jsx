import { Link } from 'react-router-dom';
import './style.css';

export default function BackButton() {
  return (
    <Link to="/" className="btn-voltar">
      Voltar para Início
    </Link>
  );
}