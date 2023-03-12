import { useState } from "react";
import ControleLivro from "../classes/controle/ControleLivro";
import ControleEditora from "../classes/controle/ControleEditora";
import styles from "../styles/Home.module.css";
import Livro from "@/classes/modelo/Livro";
import Head from "next/head";
import { Menu } from "../componentes/Menu";

export default function LivroDados() {
  const controleEditora = new ControleEditora();

  const baseURL = "http://localhost:3000/api/livros";

  const incluirLivro = async (livro: Livro): Promise<boolean> => {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livro),
    });
    const data = await response.json();
    return response.ok;
  };

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro = {
      codLivro: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n"),
      codEditora: codEditora,
    };
    const resultado = await incluirLivro(livro);
    if (resultado) {
      window.location.href = "/LivroLista";
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastro de Livros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <form onSubmit={incluir} className="p-5">
        <h1>Cadastro de Livros</h1>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            rows={3}
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="codEditora" className="form-label">
            Editora
          </label>
          <select
            className="form-select"
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores (1 por linha)
          </label>
          <textarea
            className="form-control"
            id="autores"
            rows={3}
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </div>
  );
}
