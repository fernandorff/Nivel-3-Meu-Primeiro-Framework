import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista.js";
import LivroDados from "./LivroDados.js";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark px-5">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              Lista de Livros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dados" className="nav-link text-light">
              Dados do Livro
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container p-5">
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
