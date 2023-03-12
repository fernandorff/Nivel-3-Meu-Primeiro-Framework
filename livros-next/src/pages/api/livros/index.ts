import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from "../../../classes/controle/ControleLivro";

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
      break;
    case "POST":
      const livro = req.body;
      controleLivro.incluir(livro);
      res.status(200).json({ message: "Livro incluído com sucesso!" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ message: `Método ${req.method} não permitido` });
      break;
  }
};
