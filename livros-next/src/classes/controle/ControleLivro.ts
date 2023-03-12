import Livro from "../modelo/Livro";

const livros = [
  new Livro(1, 1, "Livro 1", "Resumo do livro 1", ["Autor 1", "Autor 2"]),
  new Livro(2, 2, "Livro 2", "Resumo do livro 2", ["Autor 3"]),
  new Livro(3, 3, "Livro 3", "Resumo do livro 3", ["Autor 4"]),
];

export default class ControleLivro {
  obterLivros() {
    return livros;
  }

  incluir(livro: Livro) {
    const ultimoCodigo =
      livros.length > 0 ? livros[livros.length - 1].codigo : 0;
    livro.codigo = ultimoCodigo + 1;
    livros.push(livro);
  }

  excluir(codigo: number) {
    const indice = livros.findIndex((livro) => livro.codigo === codigo);
    if (indice >= 0) {
      livros.splice(indice, 1);
    }
  }
}
