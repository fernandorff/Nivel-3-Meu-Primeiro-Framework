import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: string) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td className="text-center align-middle">
        <button
          className="btn btn-danger"
          onClick={() => props.excluir(String(props.livro.codigo))}
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
};
