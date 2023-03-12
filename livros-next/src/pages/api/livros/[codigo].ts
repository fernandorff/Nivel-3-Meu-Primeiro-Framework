import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from "../../../classes/controle/ControleLivro";

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      const codigo = Number(req.query.codigo);
      controleLivro.excluir(codigo);
      res.status(200).json({ message: "Livro excluído com sucesso!" });
      break;
    default:
      res.setHeader("Allow", ["DELETE"]);
      res.status(405).json({ message: `Método ${req.method} não permitido` });
      break;
  }
};
