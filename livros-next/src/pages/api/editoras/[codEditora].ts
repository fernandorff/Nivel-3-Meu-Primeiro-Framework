import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { codEditora } = req.query;
    const nomeEditora = await controleEditora.getNomeEditora(
      Number(codEditora)
    );
    res.status(200).json({ nome: nomeEditora });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};
