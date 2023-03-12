import React, { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

export default function LivroLista() {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1 className="m-3 text-center">Livros</h1>
      <table className="table table-striped table-hover">
        <thead className="bg-dark">
          <tr className="text-center text-light">
            <th>Ações</th>
            <th>Código</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

function LinhaLivro(props) {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td className="text-center align-middle">
        <button
          className="btn btn-danger"
          onClick={() => props.excluir(props.livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td className="text-center align-middle">{props.livro.codigo}</td>
      <td className="text-center align-middle">{props.livro.titulo}</td>
      <td className="text-center align-middle">{props.livro.resumo}</td>
      <td className="text-center align-middle">{nomeEditora}</td>
      <td className="text-center align-middle">
        <ul>
          {props.livro.autores.map((autor, index) => (
            <li className="text-center" key={index}>
              {autor}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
