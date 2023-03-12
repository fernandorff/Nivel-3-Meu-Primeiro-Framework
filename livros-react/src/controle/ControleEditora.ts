import Editora from "../modelo/Editora";

const editoras = [
  new Editora(1, "Editora A"),
  new Editora(2, "Editora B"),
  new Editora(3, "Editora C"),
];

export default class ControleEditora {
  getEditoras() {
    return editoras;
  }

  getNomeEditora(codEditora: number) {
    const editora = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    return editora?.nome;
  }
}
